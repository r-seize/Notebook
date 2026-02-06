document.addEventListener('DOMContentLoaded', function () {
    const langData = document.getElementById('lang-data');
    if (!langData) return;

    const currentLang       = langData.dataset.lang;
    const isCategory        = langData.dataset.isCategory === 'true';
    const categorySlug      = langData.dataset.categorySlug;
    const translationUrl    = langData.dataset.translation;

    function adaptAllLinks() {
        const preferredLang = localStorage.getItem('preferredLang') || 'en';

        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;

            if (preferredLang === 'fr' && !href.startsWith('/fr/')) {
                if (href.startsWith('/categories/')) {
                    const parts = href.split('/').filter(p => p);
                    if (parts.length >= 2) {
                        const category = parts[1];
                        link.setAttribute('href', `/fr/categories/${category}/`);
                    }
                }
                else if (href === '/') {
                    link.setAttribute('href', '/fr/');
                }
            }
            else if (preferredLang === 'en' && href.startsWith('/fr/')) {
                if (href.startsWith('/fr/categories/')) {
                    const parts = href.split('/').filter(p => p);
                    if (parts.length >= 3) {
                        const category = parts[2];
                        link.setAttribute('href', `/categories/${category}/`);
                    }
                }
                else if (href === '/fr/' || href === '/fr') {
                    link.setAttribute('href', '/');
                }
            }
        });
    }

    const observer = new MutationObserver(function (mutations) {
        adaptAllLinks();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    adaptAllLinks();

    setTimeout(adaptAllLinks, 100);
    setTimeout(adaptAllLinks, 500);

    const langSwitchers = document.querySelectorAll('.lang-switcher-header a');

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function (e) {
            e.preventDefault();

            const targetLang = this.dataset.lang;

            if (targetLang === currentLang) return;
            localStorage.setItem('preferredLang', targetLang);

            let targetUrl = '/';

            if (translationUrl) {
                targetUrl = translationUrl;
            }
            else if (isCategory && categorySlug) {
                if (targetLang === 'fr') {
                    targetUrl = `/fr/categories/${categorySlug}/`;
                } else {
                    targetUrl = `/categories/${categorySlug}/`;
                }
            }
            else if (window.location.pathname === '/' || window.location.pathname === '/fr/' || window.location.pathname === '/fr') {
                targetUrl = targetLang === 'fr' ? '/fr/' : '/';
            }
            else {
                targetUrl = targetLang === 'fr' ? '/fr/' : '/';
            }
            window.location.href = targetUrl;
        });
    });

    langSwitchers.forEach(switcher => {
        if (switcher.dataset.lang === currentLang) {
            switcher.classList.add('active');
        } else {
            switcher.classList.remove('active');
        }
    });
});