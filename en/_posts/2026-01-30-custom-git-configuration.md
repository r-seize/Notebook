---
layout: post
title: "My Custom Git Configuration"
date: 2026-01-30
categories: [git]
post_id: "gitconfig-personnelle"
excerpt: "Discover my optimized Git configuration for a smoother and more visual daily workflow."
permalink: /custom-git-configuration/
---

After years of using Git on a daily basis, I ended up customizing my configuration to match my workflow exactly. Today, I'm sharing my `.gitconfig` with all the little tricks that save me time every day.

## Why customize your gitconfig?

At first, you use Git with the basic commands: `git add`, `git commit`, `git push`. But over time, you realize that you're always typing the same commands, that you'd like to have more colors to help you find your way around, or that you'd like more readable logs. That's when `.gitconfig` becomes your best friend.

## Colors: see at a glance

```bash
[color]
  ui      = auto
  branch  = auto
  diff    = auto
  status  = auto

[color “branch”]
  current = magenta bold
  local   = white bold
  remote  = green bold

[color “status”]
  added       = green bold
  changed     = yellow bold
  untracked   = red
```

I love having colors in my terminal. It makes things more fun:
- **Bold magenta** for my current branch (impossible to get wrong)
- **Green** for added files (positive = green in my head)
- **Yellow** for changes (watch out, something has changed)
- **Red** for untracked files (alert, forgotten files)

It's visual, it's immediate, and it saves me from having to reread `git status` three times.

## Aliases: my everyday shortcuts

```bash
[alias]
  st = status
  ci = commit
  br = branch
  co = checkout
  df = diff
```

These basic aliases are like my keyboard shortcuts. Instead of typing `git status`, I type `git st`. Less typing, less time wasted. Simple and effective. (Honestly, it's cooler, right?)

### More advanced aliases

```bash
  rb = rebase
  ri = rebase -i
  rc = rebase --continue
  ca = commit --amend
  ap = add -p
```

- `git ri`: for a quick interactive rebase when I want to clean up my history
- `git ca`: correct the last commit without creating a new message
- `git ap`: add my changes selectively (super handy for making clean commits)

### My custom logs

This is where it gets really interesting:

```bash
  lo = log --graph --pretty=format:‘%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%ar - %cs) %C(bold blue)<%an>%Creset’ --abbrev-commit
```

This `git lo` command displays a graphical history with:
- The commit hash in red
- Branches/tags in yellow
- The commit message
- The relative AND absolute date (e.g., “2 days ago - 2026-01-27”)
- The author in blue

The result: a log that looks like a real visual tool, not just a list of text.

```bash
  lh = log --graph --pretty=format:‘%Cred%h%Creset -%C(yellow)%d%Creset %s %Creset’ --abbrev-commit --date=relative
```

`git lh` (for “log history”) is the minimalist version when I just want to quickly see the history without all the details.

### The alias that lists branches by date

```bash
  lb = !git for-each-ref --sort=creatordate --format='%(color:yellow)%(refname:short)%(color:reset)  |  %(color:green)%(creatordate:relative)%(color:reset)  |  %(authorname)' refs/heads/
```

`git lb` shows me all my local branches sorted by the commit date pointed to by the branch. Perfect for finding branches in a readable way.

### Newcomers

```bash
  rt = restore
  sw = switch
```

Since Git introduced `restore` and `switch` to clarify the uses of `checkout`, I've added these aliases. `git sw` to switch branches, `git rt` to restore files.

## Delta: my favorite diff viewer

```bash
[delta]
  features      = decorations
  side-by-side  = true
  line-numbers  = true
```

I use [delta](https://github.com/dandavison/delta) to display my diffs. It's a tool that completely transforms the visual experience:
- Side-by-side display
- Line numbers
- Syntax highlighting
- Smart highlighting of changes

Instead of having an austere diff, I have a real comparison tool that allows me to instantly understand what has changed.

```bash
[pager]
  diff    = delta
  log     = delta
  reflog  = delta
  show    = delta
```

All my displays go through delta. It's configured once, and after that it's transparent.

## Core configuration

```bash
[core]
  autocrlf    = input
  editor      = vim
  ignorecase  = false
```

- **autocrlf = input**: on Mac/Linux, this avoids line endings issues with colleagues on Windows
- **editor = vim**: my default editor for commit messages
- **ignorecase = false**: Git distinguishes between `file.txt` and `File.txt`

## Handy extras

```bash
[push]
  autoSetupRemote = true
```

This option is great: when I create a new branch and do `git push`, Git automatically configures tracking with the remote branch. No need to do `git push -u origin my-branch` anymore.

```bash
[init]
  defaultBranch   = main
```

For the past few years, `main` instead of `master`. Simple and clear.

```bash
[credential]
  helper = osxkeychain
```

On macOS, this securely stores my credentials in the keychain. I only have to type my password once.

## Conclusion

My Git configuration reflects the way I work (but also draws heavily on inspiration from existing work xD). It has evolved over time as I discovered new commands and tools such as delta.

My advice: don't just copy this configuration, but use it as inspiration. Add aliases that correspond to YOUR most frequently used commands. Try out colors that appeal to YOU. Your `.gitconfig` should reflect your personality.

If this configuration inspires you, you can find my complete `.gitconfig` file [here]() and freely adapt it to your own workflow.

---

*PS: If you want to see delta in action, I highly recommend checking out [Delta](https://github.com/dandavison/delta). It's easy to install and it really changes your life.*