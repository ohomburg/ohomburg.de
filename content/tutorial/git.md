+++
url = "/git.html"
title = "Git+SSH Cheatsheet"
styles = ["cheatsheet.scss"]
lang = "en"
+++

## Git
### Repository

* create: `git init`
* clone: <code>git clone git@<i class="ph">host</i>:<i class="ph">username/repo</i>.git</code>

### Commit

* Commit all changes: <code>git commit . -m "<i class=ph>message</i>"</code>
* Add all files, including untracked files: `git add -A`
* Change message of last commit: <code>git commit --amend -m "<i class=ph>message</i>"</code>

### Branch

* create: <code>git checkout -b <i class=ph>new-branch</i></code>
<li class="danger">reset when broken: <code>git reset --hard @{u}</code></li>

### Merge and Rebase

Merge = create commit from two parallel tracks of changes; Rebase = Act like changes happened in sequence.
Merging is usually faster and works in all situations, but rebase makes the commit history look nicer.

## SSH

* <code>ssh <i class=ph>user</i>@<i class=ph>host</i></code>
* Cope to remote: <code>scp <i class=ph>local/file/path.ext</i> <i class=ph>user</i>@<i class=ph>host</i>:<i class=ph>remote/file/path.ext</i></code>
* Cope from remote: <code>scp <i class=ph>user</i>@<i class=ph>host</i>:<i class=ph>remote/file/path.ext</i><i class=ph>local/file/path.ext</i></code>
* Exiting VIM: <code>[ESC]:q![enter]</code>

### Public key authentication

* More secure and less tedious than password authentication (only one password to remember)
* generate key: `ssh-keygen`
* copy key to host: <code>ssh-copy-id <i class=ph>user</i>@<i class=ph>host</i></code>

### The SSH-agent

If you are using public key authentication and don't like typing passwords, add this at the end of your `.bashrc`/`.zshrc`/`.profile` (on the client):

    eval "$(ssh-agent)"

Next, add into your `~/.ssh/config` (create it if it does not exist):

    AddKeysToAgent yes

If you wish to use the same key on the remote (for example, with git), also add this:

<pre>
Host <i class=ph>host</i>
    User <i class=ph>username</i>
    ForwardAgent yes
</pre>
