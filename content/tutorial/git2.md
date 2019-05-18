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
