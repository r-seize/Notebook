---
layout: post
title: "Utiliser plusieurs clés SSH pour GitHub avec un seul ordinateur"
date: 2026-02-01
categories: [ssh]
lang: fr
post_id: "ssh-github-multiple-keys"
excerpt: "Apprenez à configurer plusieurs clés SSH pour gérer différents comptes GitHub sur un seul ordinateur."
permalink: /ssh-github-cles-multiples
---

### Utiliser plusieurs clés SSH pour GitHub avec un seul ordinateur

Quand on travaille sur plusieurs projets GitHub (personnels, professionnels, scolaires), il devient vite nécessaire d’utiliser différentes clés SSH. Cela permet de séparer clairement les identités et d’éviter les erreurs, comme pousser du code avec le mauvais compte. La solution consiste à configurer correctement le fichier `~/.ssh/config`.

Dans mon cas, j’ai trois comptes GitHub différents : un compte personnel, un compte pour l’entreprise et un compte pour l’école. Chacun utilise sa propre clé SSH. Voici la configuration utilisée.

```properties
# Configuration pour GitHub perso
Host github.com-perso
    HostName github.com
    User git
    IdentityFile ~/.ssh/perso_id_ed25519

# Configuration pour GitHub entreprise
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/work_id_ed25519

# Configuration pour GitHub école
Host github.com-school
    HostName github.com
    User git
    IdentityFile ~/.ssh/school_id_ed25519
```

Le principe est simple : au lieu d’utiliser directement `github.com`, on définit des alias avec le mot-clé `Host`. Chaque alias pointe vers le même serveur (`github.com`) mais utilise une clé SSH différente grâce à l’option `IdentityFile`.

Le champ `User` est toujours défini sur `git`, car c’est l’utilisateur utilisé par GitHub pour les connexions SSH. Les fichiers de clés (`perso_id_ed25519`, `work_id_ed25519`, `school_id_ed25519`) doivent bien sûr exister dans le dossier `.ssh` et avoir été ajoutés au compte GitHub correspondant.

Une fois cette configuration en place, il suffit d’adapter l’URL des dépôts Git. Par exemple, pour le compte personnel, l’URL SSH ressemblera à :

```properties
git@github.com-perso:username/repo.git
```

Pour l’entreprise ou l’école, on utilisera simplement l’alias correspondant (`github.com-work` ou `github.com-school`). Ainsi, Git sait automatiquement quelle clé utiliser selon le dépôt, sans manipulation supplémentaire.

Cette méthode est pratique, propre et évite beaucoup de confusion lorsqu’on jongle entre plusieurs environnements GitHub sur une même machine.

Si cette configuration t’inspire, tu peux retrouver mon fichier `.ssh/config` complet [ici]() et l’adapter librement à ton propre workflow.