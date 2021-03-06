---
date: 2019-02-12 21:57:07Z
title: Build Emacs
---

## Install some required packages

```shell
sudo apt-get update
sudo apt-get install -y build-essential libncurses-dev
```

## if need graphics UI

```shell
sudo apt-get install -y libgtk-3-dev libxpm-dev libjpeg-dev libgif-dev libtiff-dev libgnutls28-dev
```

## Download source and unpack it

可以到[这里](https://www.gnu.org/savannah-checkouts/gnu/emacs/emacs.html#Releases)查看最新版本号

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/gnu/emacs/emacs-26.3.tar.xz -O emacs.tar.xz
tar xf emacs.tar.xz
```

## Generate makefile and then build it

```shell
cd emacs
./configure
make -j 4
sudo make install
```

> You can find some flag in INSTALL file to generate custome make file.

## Optional. install [spacemacs](http://spacemacs.org/)

```shell
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
```

### If you have a file named .emacs under your home folder, you need remove it
