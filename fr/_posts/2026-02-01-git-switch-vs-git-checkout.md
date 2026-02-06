---
layout: post
title: "Git Checkout vs Git Switch : Quelle Commande Utiliser ?"
date: 2026-02-03
categories: [git]
lang: fr
post_id: "git-checkout-vs-switch"
excerpt: "Découvrez pourquoi et quand utiliser `git switch` plutôt que `git checkout` pour changer de branche, et comment simplifier votre workflow Git."
permalink: /git-checkout-vs-switch-quelle-commande-utiliser
---

## **Mon histoire avec `git checkout`**

Il fut un temps (pas si lointain) où j’étais un **adepte inconditionnel** de `git checkout`. Changer de branche ? `git checkout`. Restaurer un fichier ? `git checkout`. Explorer un vieux commit et me retrouver en mode *detached HEAD* en me demandant *"Mais… où suis-je ?"* ? **Évidemment `git checkout`.**

Cette commande était mon couteau suisse : pratique, mais parfois source de confusion.

## **Les limites avec `git checkout`**

`git checkout` est une commande **polyvalente**, mais cette polyvalence a un prix :

### **Ce qu’elle permet :**
- Changer de branche.
- Explorer des commits spécifiques (mode *detached HEAD*).
- Restaurer des fichiers.

### **Les pièges :**
- **Se retrouver en mode *detached HEAD*** : En ciblant un commit au lieu d’une branche, on peut facilement perdre ses repères.
- **Restaurer un fichier par erreur** : Une simple confusion entre `git checkout ma-branche` et `git checkout -- mon-fichier` peut effacer des modifications non commitées.

## **Pourquoi `git switch` est une meilleure alternative ?**

`git switch` est une commande **plus intuitive et sécurisée** pour changer de branche. Voici pourquoi je l’ai adoptée :

### **Ses avantages :**
- **Clarté** : Une seule action, changer de branche.
- **Sécurité** : Moins de risques de se retrouver en mode *detached HEAD*.
- **Simplicité** : Créer une nouvelle branche est plus intuitif avec `git switch -c nouvelle-branche`.

### **Exemple d’utilisation :**
```properties
# Changer de branche
git switch main

# Créer et basculer vers une nouvelle branche
git switch -c nouvelle-fonctionnalite
```

## Quand utiliser `git checkout` ?

`git checkout` reste évidemment utile pour :
- **Restaurer des fichiers** : `git checkout -- mon-fichier.txt`.
- **Explorer des commits spécifiques** : `git checkout abc123`.

## Conclusion

Pour changer de branche, privilégiez `git switch` pour sa simplicité et sa sécurité. Réservez `git checkout` pour les actions spécifiques comme la restauration de fichiers ou l’exploration de commits.

En adoptant cette distinction, vous gagnerez en clarté et éviterez des erreurs courantes dans votre workflow Git.