# 高级指令

本章将介绍以下 Linux 系统的高级指令。

## hostname 指令

显示和设置系统的主机名称

**语法**
```shell
hostname (选项) (参数)
```
![hostname 指令](/blogs/images/linux/hostname.png)

**参数说明**
- i：显示主机的ip地址；

## id 指令

查看一个用户的一些基本信息（包含用户id，用户组id，附加组id）。

**语法**
```bash
id [-gGnru][--help][--version][用户名称]

# 验证信息 /etc/passwd /etc/group
```
![id 指令](/blogs/images/linux/id.png)

**参数说明**
- g或--group 　 显示用户所属群组的ID。
- G或--groups   显示用户所属附加群组的ID。
- n或--name 　  显示用户，所属群组或附加群组的名称。
- r或--real 　  显示实际ID。
- u或--user 　  显示用户ID。

## whoami 指令

显示当前登录的用户名 一般用于shell脚本。

**语法**
```shell
whoami(选项)  # 等同于 id -un
```
![whoami 指令](/blogs/images/linux/whoami.png)

## ps 指令(重点)

查看服务器的进程信息

**语法**
```bash
ps aux

ps -ef

# 参数说明
# USER 该进程是由哪个用户产生的。
```
![ps 指令](/blogs/images/linux/ps1.png)
![ps 指令](/blogs/images/linux/ps2.png)

**图片参数说明**

| 表头    | 含义                                                         |
| ------- | :----------------------------------------------------------- |
| USER    | 该进程是由哪个用户产生的。                                   |
| PID     | 进程的 ID。                                                  |
| %CPU    | 该进程占用 CPU 资源的百分比，占用的百分比越高，进程越耗费资源。 |
| %MEM    | 该进程占用物理内存的百分比，占用的百分比越高，进程越耗费资源。 |
| VSZ     | 该进程占用虚拟内存的大小，单位为 KB。                        |
| RSS     | 该进程占用实际物理内存的大小，单位为 KB。                    |
| TTY     | 该进程是在哪个终端运行的。其中，tty1 ~ tty7 代表本地控制台终端（可以通过 Alt+F1 ~ F7 快捷键切换不同的终端），tty1~tty6 是本地的字符界面终端，tty7 是图形终端。pts/0 ~ 255 代表虚拟终端，一般是远程连接的终端，第一个远程连接占用 pts/0，第二个远程连接占用 pts/1，依次増长。 |
| STAT    | 进程状态。常见的状态有以下几种：<br/>-D：不可被唤醒的睡眠状态，通常用于 I/O 情况。<br/>-R：该进程正在运行。<br/>-S：该进程处于睡眠状态，可被唤醒。<br/>-T：停止状态，可能是在后台暂停或进程处于除错状态。<br/>-W：内存交互状态（从 2.6 内核开始无效）。<br/>-X：死掉的进程（应该不会出现）。<br/>-Z：僵尸进程。进程已经中止，但是部分程序还在内存当中。<br/>-<：高优先级（以下状态在 BSD 格式中出现）。<br/>-N：低优先级。<br/>-L：被锁入内存。<br/>-s：包含子进程。<br/>-l：多线程（小写 L）。<br/>-+：位于后台。 |
| START   | 该进程的启动时间。                                           |
| TIME    | 该进程占用 CPU 的运算时间，注意不是系统时间。                |
| COMMAND | 产生此进程的命令名。                                         |

**参数说明**
- a: 显示现行终端机下的所有程序，包括其他用户的程序。
- u: 以用户为主的格式来显示程序状况。
- x: 显示所有程序，不以终端机来区分。
- `-e`: 显示所有程序。
- `-f`: 显示UID,PPIP,C与STIME栏位。

## top 指令(重点)

查看服务器的进程占用的资源

**语法**
```bash
top
```
![top 指令](/blogs/images/linux/top.png)

## du 指令

## find 指令

## service 指令(重点)

## kill 指令(重点)

## killall 指令

## ifconfig 指令(重点)

## reboot 指令

## shutdown 指令

## uptime 指令

## uname 指令

## netstat 指令

## scp 指令