# Project 1: Build a team blog

##Basic git workflow:

**master**: our primary development branch. Since everyone is still learning/relearning git, do NOT merge anything into master until I've had a chance to check it. Just leave your work in a pull request.

**gh-pages**: after I merge something into master, I'll update gh-pages to mirror it. Do NOT make any direct changes to this branch.

1. Update your copy of master before you begin a feature.

```
git checkout master
git pull
```

2. Name your branch something short and descriptive, preferably starting with a verb like "add", "fix" or "remove".

```
git checkout -b "add-about-page"
```

3. Make your changes. Save them, then add and commit them to your local repo. Do this as many times as you like. In future projects, we'll explore ways of combining your commits before pushing it up.

```
git add -A
git commit -m "this is an inline commit message"
```

4. Push your changes up to the repo. If it's the first time you've pushed this branch up, you need to set the branch as upstream.

```
git push -u origin "add-about-page"
```

If you want to configure your git to always set the upstream branch to match your current branch name:

```
git config --global push.default current
```

*and then to push your current branch up to a branch with the same name on the repo*

```
git push
```

**BE CAREFUL THAT YOU DO NOT USE THE SAME BRANCH NAME AS SOMEONE ELSE IF YOU SET THIS OPTION.**

5. Create a pull request on github to merge your branch into master. I will then review it and if it's ready, merge it in.

6. After the branch has been merged, it's now safe to delete your local branch.

```
git checkout master
git branch -D "add-about-page"
```
