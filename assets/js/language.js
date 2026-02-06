document.addEventListener('DOMContentLoaded', function () {
    const langData = document.getElementById('lang-data');
    if (!langData) return;

    const baseUrl           = langData.dataset.baseurl || '';
    const currentLang       = langData.dataset.lang;
    const isCategory        = langData.dataset.isCategory === 'true';
    const categorySlug      = langData.dataset.categorySlug;
    const translationUrl    = langData.dataset.translation;

    function adaptAllLinks() {
        const preferredLang = localStorage.getItem('preferredLang') || 'en';

        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;

            const pathWithoutBase = href.replace(baseUrl, '');

            if (preferredLang === 'fr' && !pathWithoutBase.startsWith('/fr/')) {
                if (pathWithoutBase.startsWith('/categories/')) {
                    const parts = pathWithoutBase.split('/').filter(p => p);
                    if (parts.length >= 2) {
                        const category = parts[1];
                        link.setAttribute('href', baseUrl + '/fr/categories/' + category + '/');
                    }
                }
                else if (pathWithoutBase === '/') {
                    link.setAttribute('href', baseUrl + '/fr/');
                }
            }
            else if (preferredLang === 'en' && pathWithoutBase.startsWith('/fr/')) {
                if (pathWithoutBase.startsWith('/fr/categories/')) {
                    const parts = pathWithoutBase.split('/').filter(p => p);
                    if (parts.length >= 3) {
                        const category = parts[2];
                        link.setAttribute('href', baseUrl + '/categories/' + category + '/');
                    }
                }
                else if (pathWithoutBase === '/fr/' || pathWithoutBase === '/fr') {
                    link.setAttribute('href', baseUrl + '/');
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

            let targetUrl = baseUrl + '/';

            if (translationUrl) {
                targetUrl = translationUrl;
            }
            else if (isCategory && categorySlug) {
                if (targetLang === 'fr') {
                    targetUrl = baseUrl + '/fr/categories/' + categorySlug + '/';
                } else {
                    targetUrl = baseUrl + '/categories/' + categorySlug + '/';
                }
            }
            else {
                const currentPath = window.location.pathname;
                const pathWithoutBase = currentPath.replace(baseUrl, '');
                
                if (pathWithoutBase === '/' || pathWithoutBase === '/fr/' || pathWithoutBase === '/fr') {
                    targetUrl = targetLang === 'fr' ? baseUrl + '/fr/' : baseUrl + '/';
                }
                else {
                    targetUrl = targetLang === 'fr' ? baseUrl + '/fr/' : baseUrl + '/';
                }
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