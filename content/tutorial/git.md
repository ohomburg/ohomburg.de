+++
url = "/git.html"
title = "Git+SSH Cheatsheet"
styles = ["cheatsheet.scss"]
lang = "en"
+++

## Git
### Repository

* create: `git init`
* clone: `git clone git@host:username/repo.git`

### Commit

* Commit all changes: `git commit . -m "message"`
* Add all files, including untracked files: `git add -A`
* Change message of last commit: `git commit --amend -m "message"`

### Branch

* Create: `git checkout -b new-branch`
* Change branches: `git switch branchname`
* Change back to previous branch: `git switch -`
* Reset when broken: `git reset --hard @{u}`
     * Warning: this can only be undone using the reflog

### Merge and Rebase

Merge = create commit from two parallel tracks of changes; Rebase = Act like changes happened in sequence.
Merging is usually faster and works in all situations, but rebase makes the commit history look nicer.

## SSH

* `ssh user@host`
* Copy to remote: `scp local/file/path user@host:remote/file/path`
* Copy from remote: `scp user@host:remote/file/path local/file/path`
* Exiting VIM: `[ESC]:q![enter]`

### Public key authentication

* More secure and less tedious than password authentication (only one password to remember)
* generate key: `ssh-keygen`
* copy key to host: `ssh-copy-id user@host`

### The SSH-agent

If you are using public key authentication and don't like typing passwords, add this at the end of your `.bashrc` / `.zshrc` / `.profile` (on the client):

    eval "$(ssh-agent)"

Next, add into your `~/.ssh/config` (create it if it does not exist):

    AddKeysToAgent yes

If you wish to use the same key on the remote (for example, with git), also add this:

```
Host example.com
    User username
    ForwardAgent yes
```
