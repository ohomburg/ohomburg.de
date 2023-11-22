+++
url = "/git2.html"
title = "Git for Git Users"
styles = ["cheatsheet.scss"]
lang = "en"
+++

## Commit messages

* First line: Imperative subject line (max. 50 chars)
* One free line
* Other relevant information, reasoning, explanations, etc.

## Pulling

* When the server has changes unrelated to yours: `git pull --rebase`
    * Make this the default: `git config --bool pull.rebase true`
    * In this case, `git pull --merge` can be used to restore previous behavior.
* When the server has changes and you do not: `git pull --ff-only`
* Otherwise: `git pull` (Works always, but sometimes not as pretty)

## Other tricks

* `git reset --soft HEAD^` moves changes from the last commit back to the index so that they can be edited.
* Follow up with `git commit -c ORIG_HEAD` to re-commit afterwards.

## Undo things

### Revert

* If you want to undo changes that have been pushed, you can revert them
* `git revert HEAD` reverts the latest commit
* `git revert <commit>` reverts one commit by hash

### Amend

* If you want to change something about your latest (unpushed!!) commit, you can amend it
* Make your change on the index, then `git commit --amend`
* Can also be used to change the commit message (interactively or with `-m`)

### Reflog

* If you want to undo things locally (meaning not pushed anywhere), you can use the reflog
* This can also undo an undo change, or "redo" the change
* `git reflog` shows you what recent actions git has tracked
    * Anything that changes HEAD: checkout, switch, merge, rebase, reset, commit, etc.
* The most recent entry `HEAD@{0]` is the current state
* You can use these refs in any command that accepts a ref. Example: `git reset --hard 'HEAD@{2}'` undoes the last two actions
    * This will add a new entry into the reflog, and can be undone with another reset.
* You can also use dates instead of numbers, e.g. `git reset --hard '@{yesterday}'` undoes everything done locally today

## Combining commits

Scenario: you want to combine changes from multiple commits into one and they have not been pushed.

Option 1: preserving all commit messages

* `git reset --hard HEAD~5` undoes the last 5 commits
* `git merge --squash 'HEAD@{1}'` squash-merges those 5 commits back into linear history
* `git commit` creates the actual squashed commit
    * Message will open in editor with all commit messages combined

Option 2: new commit message

* `git reset --soft HEAD~5` undoes the last 5 commits, but keeps the changes in the working directory and index
* `git commit` creates the squashed commit and allows you to enter a new message

Option 3: flexibility

* `git rebase -i HEAD~5` will begin an interactive rebase session with the last 5 commits
* If unsure how many commits can be rebased safely, you can use `git rebase -i @{push}` to only rebase unpushed commits
* Your configured editor will open with the rebase todo-list
* You can reorder lines to reorder commits
* You can replace the word `pick` on any line with `squash` to combine them and concatenate the commit messages
* Analogously, `fixup` combines commits but only keeps the first (topmost) commit's message

## Reordering commits

* `git rebase -i HEAD~5` will begin an interactive rebase session with the last 5 commits
* Your configured editor will open with the rebase todo-list
* You can reorder lines to reorder commits
