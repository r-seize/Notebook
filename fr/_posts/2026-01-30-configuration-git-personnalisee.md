---
layout: post
title: "Ma Configuration Git Personnalisée"
date: 2026-01-30
categories: [fr, git]
lang: fr
post_id: "gitconfig-personnelle"
excerpt: "Découvrez ma configuration Git optimisée pour un workflow quotidien plus fluide et visuel."
permalink: /configuration-git-personnalisee/
---

Après des années à utiliser Git quotidiennement, j'ai fini par personnalisé ma configuration pour qu'elle corresponde exactement à ma façon de travailler. Aujourd'hui, je vous partage mon `.gitconfig` avec toutes les petites astuces qui me font gagner du temps chaque jour.

## Pourquoi personnaliser son gitconfig ?

Au début, on utilise Git avec les commandes de base : `git add`, `git commit`, `git push`. Mais au fil du temps, on se rend compte qu'on tape toujours les mêmes commandes, qu'on aimerait avoir plus de couleurs pour mieux s'y retrouver, ou qu'on voudrait des logs plus lisibles. C'est là que le `.gitconfig` devient votre meilleur ami.

## Les couleurs : voir en un coup d'œil

```bash
[color]
  ui      = auto
  branch  = auto
  diff    = auto
  status  = auto

[color "branch"]
  current = magenta bold
  local   = white bold
  remote  = green bold

[color "status"]
  added       = green bold
  changed     = yellow bold
  untracked   = red
```

J'adore avoir des couleurs dans mon terminal. Ça rend les choses plus amusant :
- **Magenta en gras** pour ma branche actuelle (impossible de se tromper)
- **Vert** pour les fichiers ajoutés (positif = vert dans ma tête)
- **Jaune** pour les modifications (attention, quelque chose a changé)
- **Rouge** pour les fichiers non suivis (alerte, fichiers oubliés)

C'est visuel, c'est immédiat, et ça évite de relire trois fois le `git status`.

## Les alias : mes raccourcis du quotidien

```bash
[alias]
  st = status
  ci = commit
  br = branch
  co = checkout
  df = diff
```

Ces alias de base, c'est comme mes touches de raccourci clavier. Au lieu de taper `git status`, je tape `git st`. Économie de frappe, économie de temps. Simple et efficace. (Franchement c'est plus cool non ?)

### Les alias plus avancés

```bash
  rb = rebase
  ri = rebase -i
  rc = rebase --continue
  ca = commit --amend
  ap = add -p
```

- `git ri` : pour un rebase interactif rapide quand je veux nettoyer mon historique
- `git ca` : corriger le dernier commit sans créer un nouveau message
- `git ap` : ajouter mes changements de manière sélective (hyper pratique pour faire des commits propres)

### Mes logs personnalisés

C'est ici que ça devient vraiment intéressant :

```bash
  lo = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%ar - %cs) %C(bold blue)<%an>%Creset' --abbrev-commit
```

Cette commande `git lo` affiche un historique graphique avec :
- Le hash du commit en rouge
- Les branches/tags en jaune
- Le message du commit
- La date relative ET absolue (genre "il y a 2 jours - 2026-01-27")
- L'auteur en bleu

Résultat : un log qui ressemble à un vrai outil visuel, pas juste une liste de texte.

```bash
  lh = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Creset' --abbrev-commit --date=relative
```

`git lh` (pour "log history"), c'est la version minimaliste quand je veux juste voir rapidement l'historique sans tous les détails.

### L'alias qui liste les branches par date

```bash
  lb = !git for-each-ref --sort=creatordate --format='%(color:yellow)%(refname:short)%(color:reset)  |  %(color:green)%(creatordate:relative)%(color:reset)  |  %(authorname)' refs/heads/
```

`git lb` me montre toutes mes branches locales triées selon la date du commit pointé par la branche. Parfait pour retrouver des branches de manière lisible.

### Les nouveaux venus

```bash
  rt = restore
  sw = switch
```

Depuis que Git a introduit `restore` et `switch` pour clarifier les usages de `checkout`, j'ai ajouté ces alias. `git sw` pour changer de branche, `git rt` pour restaurer des fichiers.

## Delta : mon viewer de diff préféré

```bash
[delta]
  features      = decorations
  side-by-side  = true
  line-numbers  = true
```

J'utilise [delta](https://github.com/dandavison/delta) pour afficher mes diffs. C'est un outil qui transforme complètement l'expérience visuelle :
- Affichage côte à côte
- Numéros de ligne
- Coloration syntaxique
- Mise en évidence intelligente des changements

Au lieu d'avoir un diff austère, j'ai un vrai outil de comparaison qui me permet de comprendre instantanément ce qui a changé.

```bash
[pager]
  diff    = delta
  log     = delta
  reflog  = delta
  show    = delta
```

Tous mes affichages passent par delta. C'est configuré une fois, et après c'est transparent.

## Configuration du core

```bash
[core]
  autocrlf    = input
  editor      = vim
  ignorecase  = false
```

- **autocrlf = input** : sur Mac/Linux, ça évite les problèmes de fin de ligne avec les collègues sous Windows
- **editor = vim** : mon éditeur par défaut pour les messages de commit
- **ignorecase = false** : Git fait la différence entre `fichier.txt` et `Fichier.txt`

## Les petits plus pratiques

```bash
[push]
  autoSetupRemote = true
```

Cette option est géniale : quand je crée une nouvelle branche et que je fais `git push`, Git configure automatiquement le tracking avec la branche distante. Plus besoin de faire `git push -u origin ma-branche`.

```bash
[init]
  defaultBranch   = main
```

Depuis quelques années, `main` au lieu de `master`. Simple et clair.

```bash
[credential]
  helper = osxkeychain
```

Sur macOS, ça stocke mes identifiants de manière sécurisée dans le trousseau. Je ne tape mon mot de passe qu'une seule fois.

## Conclusion

Ma configuration Git, c'est le reflet de ma façon de travailler(mais aussi pleins d'inspiration des travaux qui existe déjà xD). Elle a évolué avec le temps, au fur et à mesure que je découvrais de nouvelles commandes ou de nouveaux outils comme delta.

Mon conseil : ne copiez pas bêtement cette config, mais inspirez-vous-en. Ajoutez les alias qui correspondent à VOS commandes les plus fréquentes. Testez les couleurs qui VOUS parlent. Votre `.gitconfig` doit être à votre image.

Si cette configuration t’inspire, tu peux retrouver mon fichier `.gitconfig` complet [ici]() et l’adapter librement à ton propre workflow.

---

*PS : Si vous voulez voir delta en action, je vous recommande vraiment d'aller faire un tour sur [Delta](https://github.com/dandavison/delta). L'installation est simple et ça change vraiment la vie.*