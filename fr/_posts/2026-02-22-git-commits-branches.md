---
layout: post
title: "Ma façon d’organiser mes Git commits et mes branches"
date: 2026-02-22
categories: [git]
lang: fr
post_id: "git-commits-branches-method"
excerpt: "Comment j’organise mes branches et mes commits pour garder un historique propre, lisible et structuré."
permalink: /ma-facon-organiser-git-commits-branches/
---

Quand j’ai commencé à utiliser Git, je faisais des commits un peu n’importe comment. Des messages comme *"modif"*, *"update"* ou *"fix bug"*… et quelques semaines plus tard, impossible de comprendre ce que j’avais fait.

Avec le temps, j’ai essayé plusieurs méthodes et aujourd’hui j’utilise une structure claire pour mes **branches** et mes **commits**. Ça me permet de mieux organiser mon code, comprendre l’historique du projet et travailler plus facilement en équipe.

Je vais expliquer ici comment je fais et pourquoi.

## Organisation des branches

Pour moi, les branches servent surtout à organiser le type de travail en cours. Le nom de la branche indique directement ce que je suis en train de faire.

### Types de branches que j’utilise

* **docs** : ajout ou modification de documentation (README, commentaires…)
* **feature** : ajout d’une nouvelle fonctionnalité
* **style** : modification du style du code (formatage, indentation, correction de typos)
* **fix** : correction d’un bug ou d’une erreur
* **security** : corrections ou améliorations liées à la sécurité
* **test** : ajout ou modification de tests
* **build** : changements liés au système de build
* **release** : publication ou mise à jour d’une version

### Exemple

```
git branch feature/online-payment
git push origin style/fix-indentation
```

Avec cette approche, juste en voyant le nom de la branche, je sais immédiatement le contexte du travail.

## Organisation des commits

Pour les commits, j’utilise une convention inspirée de pratiques standardisées. Le but est que chaque commit explique clairement ce qu’il fait.

### Types de commits

* **feat** : ajout d’une fonctionnalité
* **fix** : correction de bug
* **test** : ajout ou modification de tests
* **style** : modification du style du code
* **docs** : modification de documentation
* **perf** : optimisation des performances
* **build** : changements liés au build
* **ops** : modifications liées à l’infrastructure ou au déploiement
* **ci** : modifications de la CI/CD
* **merge** : fusion de branches
* **security** : corrections de sécurité
* **release** : nouvelle version ou mise à jour

### Exemple

```
git commit -m "feat: add online payment module"
git commit -m "fix: npm dependency issue"
```

Cette structure rend l’historique du projet beaucoup plus lisible.

## Les différentes façons d’écrire un commit

Avec le temps, j’ai vu plusieurs styles de messages de commit.

### 1. Commit classique (simple)

Au début, je faisais surtout des messages descriptifs simples :

```
git "ajout fonctionnalité paiement"
```

Le problème, c’est que ce n’est pas structuré et difficile à analyser automatiquement ou à parcourir rapidement.

### 2. Commit avec type

Ensuite, j’ai commencé à utiliser un type au début du message :

```
git "feat: ajout du module de paiement"
```

Avantages :

* on comprend immédiatement le type de changement
* l’historique est plus propre
* plus facile à lire en équipe

### 3. Commit avec type et contexte (ma méthode actuelle)

Aujourd’hui, j’utilise une structure encore plus précise :

```
git "feat(auth): ajout du login avec Google"
git "fix(api): correction erreur 500"
```

Format :

```
type(scope): message
```

Pourquoi j’aime cette méthode :

* on sait **ce qui change**
* on sait **où ça change**
* historique beaucoup plus clair
* utile sur les gros projets

## Pourquoi j’ai choisi cette méthode

Personnellement, j’utilise cette organisation parce que :

* je comprends mieux mon propre code après plusieurs semaines
* l’historique Git est propre et lisible
* c’est plus simple pour travailler en groupe
* ça force à réfléchir à ce qu’on modifie
* ça facilite la maintenance du projet

Même sur des petits projets, ça fait une vraie différence.

## Conclusion

Aujourd’hui, j’essaie toujours de garder :

* des branches bien nommées
* des commits structurés
* des messages clairs

Ce n’est pas obligatoire, mais ça améliore énormément l’organisation du projet et la collaboration. Avec l’habitude, ça devient naturel et ça fait gagner du temps.