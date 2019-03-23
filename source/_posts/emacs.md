
---
title: emacs
date: 2019-02-12 21:57:07
tags:
---

> Wow I first write paper? in English. (May be it's worthing to memery).  In fact, just because I haven't Chinese input method now.

> This is my 3 or 4 time to gettting started use emacs. But in previous times, i gived up at last, this time I think I'll take to heart.

## First build emacs@latest from source

### Install some requared packages

```shell
sudo apt-get update
sudo apt-get install -y build-essential libncurses-dev libgtk-3-dev libxpm-dev  libjpeg-dev  libgif-dev  libtiff-dev libgnutls28-dev
```

> libgtk-3-dev libxpm-dev  libjpeg-dev  libgif-dev  libtiff-dev only are requared if need graphics support.

> Maybe you aren't use ubuntu, then you haven't apt-get.
> You can use your system's package manager to install such package above.

### Download source and unpack it

```shell
wget https://mirror.freedif.org/GNU/emacs/emacs-26.1.tar.xz
tar xf emacs-26.1.tar.xz
```

### Generate makefile and then build it

```shell
cd emacs-26.1
./configure
make
sudo make install
```

> You can find some flag in INSTALL file to generate custome make file.

### [Optional] install [spaceemacs](http://spacemacs.org/)

```shell
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
```

#### If you have a file named .emacs under your  home folder, you need remove it

## Next start learning emacs

### Get help

* C-h t open Tutorial
* C-h c describe shutcut
### File

* C-x C-f find file
* C-x C-s save file

### Buffer

* C-x C-b list buffers
* C-x b switch buffer

### Edit

* C-p up
* C-n down
* C-f right
* C-b left

> p = previous n = next f = forward b = backword

* C-v next page
* M-v previous page
* C-l recenter-top-bottom

* C-s search

* M-m = SPC (in spacemacs)
> maybe I'm murdering.
> ending.