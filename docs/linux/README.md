# 介绍

## Linux 是什么

Linux，全称 GNU/Linux，是一种免费使用和自由传播的类 UNIX 操作系统，其内核由林纳斯·本纳第克特·托瓦兹于 1991 年 10 月 5 日首次发布，它主要受到 Minix 和 Unix 思想的启发，是一个基于 POSIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。它能运行主要的 Unix 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux 有上百种不同的发行版，如基于社区开发的 debian、archlinux，和基于商业开发的 Red Hat Enterprise Linux、SUSE、Oracle Linux 等。

## 常见的 Linux 发行版本

Linux 的各个发行版本使用的是同一个 Linux 内核，因此在内核层不存在什么兼容性问题。常见的 Linux 发行版有一下几种：

* Debian
    * Ubuntu
* Fedora
    * RHEL (Red Hat)
        * CentOS
        * Oracle Linux
* SUSE
    * SLES
        * openSUSE
* SUSE
* Gentoo

以下表格展示了几种常见的 Linux 发行版的各自特点。

| 版本名称     | 特 点                                                        |
| ------------ | ------------------------------------------------------------ |
| Debian Linux | 开放的开发模式，且易于进行软件包升级                         |
| Fedora Core  | 拥有数量庞人的用户，优秀的社区技术支持. 并且有许多创新       |
| CentOS       | CentOS 是一种对 RHEL（Red Hat Enterprise Linux）源代码再编译的产物，由于 Linux 是开发源代码的操作系统，并不排斥样基于源代码的再分发，CentOS 就是将商业的 Linux 操作系统 RHEL 进行源代码再编译后分发，并在 RHEL 的基础上修正了不少已知的漏洞 |
| SUSE Linux   | 专业的操作系统，易用的 YaST 软件包管理系统                   |
| Gentoo Linux | 高度的可定制性，使用手册完整                                 |
| Ubuntu       | 优秀已用的桌面环境，基于 Debian 构建                         |

## 安装

本教程以 CentOS8 发行版为 Linux 学习基础,以 VMware 为系统运行环境。

首先我们需要打开 [CentOS 官网](https://www.centos.org/download/)，选择 CentOS Linux 列的 CentOS8 `x86_64`(CentOS7 同理)。

![CentOS 下载](/blogs/images/linux/download-step1.png)

在镜像列表中选择任意镜像地址并点击进入，在列表中选择 `CentOS-8.4.2105-x86_64-dvd1.iso`, 这是其中的一个镜像[下载链接](https://mirrors.tuna.tsinghua.edu.cn/centos/8.4.2105/isos/x86_64/CentOS-8.4.2105-x86_64-dvd1.iso)。

![CentOS 下载](/blogs/images/linux/download-step2.png)

::: tip 提示
在 2014 年，红帽公司收购了 CentOS ，包含 CentOS 项目商标的所有权，以及大量核心开发人。并于 2019 年，CentOS 团队和红帽子合作推出了一个新的滚动版 Linux: CentOS Stream. 此后，于 2020 年末，官宣未来不再维护 CentOS 了。原本计划维护 10 年的 CentOS8 将于 `2021-12-31` 停止维护(CentOS7 将于 `2024-06-30` 停止维护)。原本处于 RHEL 下游的 CentOS 变为了 RHEL 上游的 CentOS Stream，系统稳定性将不如从前。
:::