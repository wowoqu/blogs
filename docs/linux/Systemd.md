# Systemd 系统管理

Systemd 是 Linux 系统工具，用来启动守护进程，如今已成为大多数发行版的标准配置。以下介绍一些 systemd 的常用命令

## systemctl

`systemctl` 是 Systemd 的主命令，用于管理系统。

```shell
# 重启系统
systemctl reboot

# 关闭系统，切断电源
systemctl poweroff

# CPU停止工作
systemctl halt

# 暂停系统
systemctl suspend

# 让系统进入冬眠状态
systemctl hibernate

# 让系统进入交互式休眠状态
systemctl hybrid-sleep

# 启动进入救援状态（单用户状态）
systemctl rescue


# 服务相关

systemctl enable httpd.service  # 使某服务自动启动

systemctl disable httpd.service  # 使某服务不自动启动	 	

systemctl status httpd.service  # 检查服务状态（服务详细信息） 

systemctl is-active httpd.service  # 仅显示是否 Active

systemctl list-units  # 列出正在运行的 Unit

systemctl list-units -all  # 显示所有的服务

systemctl list-units --type=service  # 显示所有已启动的服务

systemctl start httpd.service  # 启动某服务

systemctl stop httpd.service  # 停止某服务

systemctl restart httpd.service  # 重启某服务

systemctl reload apache.service  # 重新加载一个服务的配置文件

systemctl kill apache.service  # 杀死一个服务的所有子进程

systemctl daemon-reload  # 重载所有修改过的配置文件

systemctl list-dependencies docker.service  # 查看依赖关系

systemctl list-unit-files  # 列出所有配置文件

systemctl cat docker.service  # 查看配置文件
```

## systemd-analyze

`systemd-analyze` 命令用于查看启动耗时。
```shell
# 查看启动耗时
systemd-analyze                                                                                       

# 查看每个服务的启动耗时
systemd-analyze blame

# 显示瀑布状的启动过程流
systemd-analyze critical-chain

# 显示指定服务的启动流
systemd-analyze critical-chain atd.service
```

## hostnamectl

`hostnamectl` 命令用于查看当前主机的信息。
```shell
# 显示当前主机的信息
hostnamectl

# 设置主机名。
hostnamectl set-hostname rhel7
```

## timedatectl

`timedatectl` 命令用于查看当前时区设置。

```shell
# 查看当前时区设置
timedatectl

# 显示所有可用的时区
timedatectl list-timezones                                                                                   

# 设置当前时区
timedatectl set-timezone America/New_York
timedatectl set-time YYYY-MM-DD
timedatectl set-time HH:MM:SS
```

## loginctl

`loginctl` 命令用于查看当前登录的用户。

```shell
# 列出当前session
loginctl list-sessions

# 列出当前登录用户
loginctl list-users

# 列出显示指定用户的信息
loginctl show-user ruanyf
```

## journalctl

Systemd 统一管理所有 Unit 的启动日志。带来的好处就是，可以只用 `journalctl` 一个命令，查看所有日志（内核日志和应用日志）。日志的配置文件是 `/etc/systemd/journald.conf` 。

`journalctl` 功能强大，用法非常多。

```shell
# 查看所有日志（默认情况下 ，只保存本次启动的日志）
journalctl

# 查看内核日志（不显示应用日志）
journalctl -k

# 查看系统本次启动的日志
journalctl -b
journalctl -b -0

# 查看上一次启动的日志（需更改设置）
journalctl -b -1

# 查看指定时间的日志
journalctl --since="2012-10-30 18:17:16"
journalctl --since "20 min ago"
journalctl --since yesterday
journalctl --since "2015-01-10" --until "2015-01-11 03:00"
journalctl --since 09:00 --until "1 hour ago"

# 显示尾部的最新10行日志
journalctl -n

# 显示尾部指定行数的日志
journalctl -n 20

# 实时滚动显示最新日志
journalctl -f

# 查看指定服务的日志
journalctl /usr/lib/systemd/systemd

# 查看指定进程的日志
journalctl _PID=1

# 查看某个路径的脚本的日志
journalctl /usr/bin/bash

# 查看指定用户的日志
journalctl _UID=33 --since today

# 查看某个 Unit 的日志
journalctl -u nginx.service
journalctl -u nginx.service --since today

# 实时滚动显示某个 Unit 的最新日志
journalctl -u nginx.service -f

# 合并显示多个 Unit 的日志
journalctl -u nginx.service -u php-fpm.service --since today

# 查看指定优先级（及其以上级别）的日志，共有8级
# 0: emerg
# 1: alert
# 2: crit
# 3: err
# 4: warning
# 5: notice
# 6: info
# 7: debug
journalctl -p err -b

# 日志默认分页输出，--no-pager 改为正常的标准输出
journalctl --no-pager

# 以 JSON 格式（单行）输出
journalctl -b -u nginx.service -o json

# 以 JSON 格式（多行）输出，可读性更好
journalctl -b -u nginx.serviceqq
 -o json-pretty

# 显示日志占据的硬盘空间
journalctl --disk-usage

# 指定日志文件占据的最大空间
journalctl --vacuum-size=1G

# 指定日志文件保存多久
journalctl --vacuum-time=1years
```

[原文链接: 阮一峰: Systemd 入门教程：命令篇](https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)