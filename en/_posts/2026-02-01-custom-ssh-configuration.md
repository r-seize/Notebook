---
layout: post
title: "Using multiple SSH keys for GitHub with a single computer"
date: 2026-02-01
categories: [ssh]
post_id: "ssh-github-multiple-keys"
excerpt: "Learn how to configure multiple SSH keys to manage different GitHub accounts on a single computer."
permalink: /ssh-github-multiple-keys
---

## Using multiple SSH keys for GitHub with a single computer

When working on multiple GitHub projects (personal, professional, academic), it quickly becomes necessary to use different SSH keys. This allows you to clearly separate identities and avoid mistakes, such as pushing code with the wrong account. The solution is to configure the `~/.ssh/config` file correctly.

In my case, I have three different GitHub accounts: a personal account, a company account, and a school account. Each one uses its own SSH key. Here is the configuration I use.

```bash
# Configuration for personal GitHub
Host github.com-perso
    HostName github.com
    User git
    IdentityFile ~/.ssh/perso_id_ed25519

# Configuration for GitHub work
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/work_id_ed25519

# Configuration for GitHub school
Host github.com-school
    HostName github.com
    User git
    IdentityFile ~/.ssh/school_id_ed25519
```

The principle is simple: instead of using `github.com` directly, we define aliases with the `Host` keyword. Each alias points to the same server (`github.com`) but uses a different SSH key thanks to the `IdentityFile` option.

The `User` field is always set to `git`, as this is the user GitHub uses for SSH connections. The key files (`perso_id_ed25519`, `work_id_ed25519`, `school_id_ed25519`) must of course exist in the `.ssh` folder and have been added to the corresponding GitHub account.

Once this configuration is in place, simply adapt the URL of the Git repositories. For example, for the personal account, the SSH URL will look like:

```bash
git@github.com-perso:username/repo.git
```

For companies or schools, simply use the corresponding alias (`github.com-work` or `github.com-school`). This way, Git automatically knows which key to use for each repository, without any additional manipulation.

This method is practical, clean, and avoids a lot of confusion when juggling multiple GitHub environments on the same machine.

If this configuration inspires you, you can find my complete `.ssh/config` file [here]() and freely adapt it to your own workflow.