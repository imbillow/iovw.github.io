---
date: 2019-04-21 13:50:31
title: Linux Problems
---

记录一下遇到的几个问题。

## Grub

### 多系统启动项

在以前用过的 ubuntu deepin 之类的发行版中通过执行 `sudo update-grub` 就可以自动扫描并添加其他已经安装的系统的启动项，而这在 arch 上需要额外的步骤 。

1. 如果只安装了 grub 和 efibootmgr , 那么 `update-grub` 这个命令并不存在 。实际上`sudo update-grub` 等价于 `sudo grub-mkconfig -o /boot/grub/grub.cfg` 或者也可以 安装 `update-grub` 这个 aur 包（虽然咱没试过

2. 这时发现， 并不能自动探测到其他系统的引导文件 ， 通过在 [arch wiki](https://wiki.archlinux.org/) 上搜索 grub ，找到了这里 [GRUB#Detecting_other_operating_systems](https://wiki.archlinux.org/index.php/GRUB#Detecting_other_operating_systems) 。要达到 咱们的目的，需要安装 os-prober ，然后再 `sudo grub-mkconfig -o /boot/grub/grub.cfg`

### 保存选择的启动项并设为默认

这个很简单,只需要更改 `grub` 配置文件 `/etc/default/grub`:

```shell
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```

参考 [grub manual](http://www.gnu.org/software/grub/manual/grub/grub.html#Simple-configuration)

## emacs

### 中文输入法输入不了内容

需要更改环境变量，可以更改 `~/.xprofile`

```shell
export LANG=en_US.UTF-8
export LC_CTYPE=en_US.UTF-8
```

但是输入法的一些符号（`，`,`。`），在刚输入完汉字后打不出来 ，然而再输入一个空格或者其他字符就可以，而且目前就发现只有逗号和句号有这个问题。真是奇怪的问题 。

## i3

### 无线网络连接

本来在家里用的有线网络是没有这个问题，但是目前只有无线网络可用。之前一直使用的 `NetworkManager`，但是在 i3 并不能正常使用。经过一番搜索，好像安装 `nm-applet` 也可以在 i3 使用 `NetworkManager` （实际上包名为 `network-manager-applet`）, 并且在 i3 的 config 里找到了这个

```conf
# NetworkManager is the most popular way to manage wireless networks on Linux,
# and nm-applet is a desktop environment-independent system tray GUI for it.
# exec --no-startup-id nm-applet
```

但是咱之所以用 i3 就是想要使用一个简单的桌面环境（之前用过的 dde，gnome, plasma 都动辄几百个包），然后咱找到了 [iwd](https://wiki.archlinux.org/index.php/Iwd) ,感觉太满足咱了，所以直接换 iwd

但是用 iwd 连接无线网络后并不能上网，经过一番排除后，发现启动 dhcpcd 并使用 iwd 连接就可以。（不知道什么原因，猜测是 iwd 没有 dhcp ？）

### 多显示器

熟悉 xrandr 的话可以直接

```shell
xrandr --output eDP-1-1 --auto --left-of HDMI-0
```

如果需要自动调整

`~/.config/i3/config`

```shell
exec --no-startup-id xrandr --output eDP-1-1 --auto --left-of HDMI-0
```

GUI 前端可以用 `arandr`

在插入 VGA 时自动启动 `arandr`， 参考 [wiki-udev](https://wiki.archlinux.org/index.php/Udev#Execute_on_VGA_cable_plug_in)

`/etc/udev/rules.d/95-monitor-hotplug.rules`

```shell
KERNEL=="card0", SUBSYSTEM=="drm", ENV{DISPLAY}=":0", ENV{XAUTHORITY}="/home/username/.Xauthority", RUN+="/usr/bin/arandr"
```
