---
layout: post
title: "How I organize my Git commits and branches"
date: 2026-02-22
categories: [git]
post_id: "git-commits-branches-method"
excerpt: "How I organize my branches and commits to keep a clean, readable, and structured project history."
permalink: /how-i-organize-git-commits-branches/
---

When I first started using Git, I was making commits kind of randomly. Messages like *"modif"*, *"update"*, or *"fix bug"*… and a few weeks later, it was impossible to understand what I had done.

Over time, I tried several methods, and today I use a clear structure for my **branches** and my **commits**. It helps me organize my code better, understand the project history, and work more easily in a team.

Here, I’ll explain how I do it and why.


## Branch organization

For me, branches are mainly used to organize the type of work in progress. The branch name directly indicates what I’m working on.

### Types of branches I use

* **docs**: adding or modifying documentation (README, comments…)
* **feature**: adding a new feature
* **style**: code style changes (formatting, indentation, typo fixes)
* **fix**: bug or error fixes
* **security**: security-related fixes or improvements
* **test**: adding or modifying tests
* **build**: changes related to the build system
* **release**: publishing or updating a version

### Example

```
git branch feature/online-payment
git push origin style/fix-indentation
```

With this approach, just by seeing the branch name, I immediately know the context of the work.


## Commit organization

For commits, I use a convention inspired by standardized practices. The goal is for each commit to clearly explain what it does.

### Types of commits

* **feat**: adding a feature
* **fix**: bug fix
* **test**: adding or modifying tests
* **style**: code style changes
* **docs**: documentation changes
* **perf**: performance optimization
* **build**: changes related to the build process
* **ops**: changes related to infrastructure or deployment
* **ci**: CI/CD modifications
* **merge**: branch merge
* **security**: security fixes
* **release**: new version or update

### Example

```
git commit -m "feat: add online payment module"
git commit -m "fix: npm dependency issue"
```

This structure makes the project history much easier to read.


## Different ways to write a commit

Over time, I’ve seen several styles of commit messages.

### 1. Classic commit (simple)

At first, I mostly used simple descriptive messages:

```
git "add payment feature"
```

The problem is that it’s not structured and difficult to analyze automatically or browse quickly.


### 2. Commit with a type

Then I started using a type at the beginning of the message:

```
git "feat: add payment module"
```

Advantages:

* you immediately understand the type of change
* the history is cleaner
* easier to read in a team


### 3. Commit with type and context (my current method)

Today, I use an even more precise structure:

```
git "feat(auth): add Google login"
git "fix(api): fix 500 error"
```

Format:

```
type(scope): message
```

Why I like this method:

* you know **what changed**
* you know **where it changed**
* much clearer history
* useful for large projects


## Why I chose this method

Personally, I use this organization because:

* I understand my own code better after several weeks
* the Git history is clean and readable
* it’s easier to work in a team
* it forces me to think about what I’m modifying
* it makes project maintenance easier

Even on small projects, it makes a real difference.


## Conclusion

Today, I always try to keep:

* well-named branches
* structured commits
* clear messages

It’s not mandatory, but it greatly improves project organization and collaboration. With practice, it becomes natural and saves time.

