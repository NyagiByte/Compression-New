# So you have chosen ~~death~~ contributing to Compression



1. [Get Started](#how-to-get-started)
2. [Git usage](#git-usage)
3. [Launcher integration](#linking-your-launcher)

# How to get started

Learn Git 101!

Then, either use a git UI client or the CLI:  

## Repo Access
You may fork the repository if you do not have commit access and replicate the steps on your fork. 

If you do not have access to pull the submodule, then you can still somewhat use the repo by
1. follow below instructions for setting up the launcher but dont delete the mods folder
1. Clone the main repo without submodule
1. Checkout the latest release tag `git checkout tags/2.4.1.r`
1. Add "mods/*" to the .gitignore file

## Git UI Client

Make sure you have a Git client with Git LFS available (for example, GitHub Desktop or Fork.dev, more: https://git-scm.com/tools/guis).

To enable lfs, check your clients docs.

- In Fork, open the repository's terminal and run `git lfs install`. If Git LFS is not installed, follow the instructions at https://git-lfs.com/.

- For GitHub desktop follow https://docs.github.com/en/desktop/configuring-and-customizing-github-desktop/about-git-large-file-storage-and-github-desktop



## CLI Git and Git LFS

### Windows

Install [Git for Windows](https://git-scm.com/download/win), then run:

```powershell
git lfs install
```

### macOS

Using [Homebrew](https://brew.sh/):

```sh
brew install git git-lfs
git lfs install
```

### Debian-based distributions

```sh
sudo apt update
sudo apt install git git-lfs
git lfs install
```

### Red Hat-based distributions

```sh
sudo dnf install git git-lfs
git lfs install
```

Use `yum` instead of `dnf` on older systems.

### Arch-based distributions

```sh
sudo pacman -S git git-lfs
git lfs install
```

# Git usage
If you use a UI client, they will all have option analogous to the command line options below.

## Clone a repository with an LFS submodule

For a main repository containing a submodule that also uses Git LFS:

```sh
git clone --recurse-submodules https://github.com/NyagiByte/Compression-New
cd Compression-New
git lfs pull
git submodule foreach --recursive 'git lfs pull'
```

For an already-cloned repository, run:

```sh
git submodule update --init --recursive
git lfs pull
git submodule foreach --recursive 'git lfs pull'
```

## Pulling and merging

Always pull before pushing to prevent conflicts.

### Update local

For more information, see the Git documentation for [pulling](https://git-scm.com/docs/git-pull).

```sh
git pull --recurse-submodules
```

UI clients offer tools to resolve merge conflicts.
For cli see here: https://git-scm.com/docs/git-merge#_how_to_resolve_conflicts

### Merge a branch into `main` and push it

For more information, see the Git documentation for [merging](https://git-scm.com/docs/git-merge) and [pushing](https://git-scm.com/docs/git-push).

```sh
git switch main
git pull --recurse-submodules
git merge my-branch 
git push origin main
```

Replace `my-branch` with the name of your branch. Resolve any conflicts, then commit them before pushing.

### Dont want to everride local changes?

With stash you can keep changes that would be overwritten.

```sh
git stash -u . # -u also stashes untracked files
git pull
git stash pop
```

This might ask you to also resolve some merge conflicts

## Pushing changes

For more information, see the Git documentation for [committing](https://git-scm.com/docs/git-commit) and [pushing](https://git-scm.com/docs/git-push).

Commit your changes with a clear message, then push:

```sh
git add . # to add all
# OR
git add path/to/file_you_changed.json # for precise control
git commit -m "Describe your changes"
git pull # to resolve any conflicts
git push 
```

### Pushing submodule changes

If you changed files inside a submodule, commit and push those changes from
the submodule directory first. Then commit the updated submodule reference in
the main repository and push it:

```sh
cd path/to/submodule
git add .
git commit -m "Describe your submodule changes"
git push

cd ../.. # return to the main repository
git add path/to/submodule
git commit -m "Update submodule"
git push
```

Equivalent:
```sh
git -C path/to/submodule add .
git -C path/to/submodule commit -m "Describe your submodule changes"
git -C path/to/submodule push
git add path/to/submodule
git commit -m "Update submodule"
git push
```

The submodule must be pushed to a remote that other contributors can access.
Otherwise, cloning the main repository will reference an unavailable commit.

In UI clients these can also be opened separately, but the order of operations is the same.


If you made a fork, open a pull request when ready for review.

### Committing Breaking changes

If you are tinkering with stuff that breaks the instance, consider branching to not prevent others from working on main. (Or dont push until it works, but thats bad practice)

```sh 
# Create and switch to a new branch
git switch -c my-branch-name

# After making changes, commit them and push the branch
git add .
git commit -m "Describe your changes"
git push -u origin my-branch-name
```

When you are ready merge into main.

## I f'ed up, what now?

If you made some bad mistakes, but havent commited yet, try

```sh
git checkout .
```
or
```sh
git stash -u && git stash drop
```

**Both will delete any changes you made since the last commit.**

If you already committed a bad thing, the *easiest* solution is probably:
1. Copy the files with changes you actually want to keep to another location
2. Delete repo (not the launcher files)
3. Redownload 
4. Add the good changes back
5. commit

# Linking your launcher

## Easiest:

1. Create an instance of the newest Compression Pack with Prism or ATLauncher (or whatever you use)
2. Delete all files except the launcher specific ones from the instance (instance.json etc)
3. clone the repo with the above steps into the instances/Compression folder
4. Restart launcher

## Fancy~:

1. Clone repository into your desired location
2. Create an instance of the newest Compression Pack with Prism or ATLauncher
3. Rename the created instance folder, 
4. copy the launcher-specific files to your repo
5. create a symlink in the instances folder to your repo folder
6. Restart launcher