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
ps -aux

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
- `-a`: 显示所有终端机下执行的程序，除了阶段作业领导者之外。
- `-u`: 列出属于该用户的程序的状况，也可使用用户名称来指定。
- `-x`: 显示所有程序，不以终端机来区分。
- `-e`: 显示所有程序。
- `-f`: 显示UID,PPIP,C与STIME栏位。

## top 指令(重点)

查看服务器的进程占用的资源

**语法**
```bash
top # 按 q 键推出
```
![top 指令](/blogs/images/linux/top.png)

> top - 09:44:56 up 16 days, 21:23,  1 user,  load average: 9.59, 4.75, 1.92
Tasks: 145 total,   2 running, 143 sleeping,   0 stopped,   0 zombie
Cpu(s): 99.8%us,  0.1%sy,  0.0%ni,  0.2%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   4147888k total,  2493092k used,  1654796k free,   158188k buffers
Swap:  5144568k total,       56k used,  5144512k free,  2013180k cached

**说明**
- top - 09:44:56[当前系统时间],
- 16 days[系统已经运行了16天],
- 1 user[个用户当前登录],
- load average: 9.59, 4.75, 1.92[系统负载，即任务队列的平均长度]
- Tasks: 145 total[总进程数],
- 2 running[正在运行的进程数],
- 143 sleeping[睡眠的进程数],
- 0 stopped[停止的进程数],
- 0 zombie[冻结进程数],
- Cpu(s): 99.8%us[用户空间占用CPU百分比],
- 0.1%sy[内核空间占用CPU百分比],
- 0.0%ni[用户进程空间内改变过优先级的进程占用CPU百分比],
- 0.2%id[空闲CPU百分比], 0.0%wa[等待输入输出的CPU时间百分比],
- 0.0%hi[],
- 0.0%st[],
- Mem: 4147888k total[物理内存总量],
- 2493092k used[使用的物理内存总量],
- 1654796k free[空闲内存总量],
- 158188k buffers[用作内核缓存的内存量]
- Swap:  5144568k total[交换区总量],
- 56k used[使用的交换区总量],
- 5144512k free[空闲交换区总量],
- 2013180k cached[缓冲的交换区总量],

**图表说明**
| 表头    | 含义                                                         |
| ------- | :----------------------------------------------------------- |
| PID     | 进程id                                                       |
| USER    | 进程所有者                                                   |
| PR      | 进程优先级                                                   |
| NI      | nice值。负值表示高优先级，正值表示低优先级                   |
| VIRT    | 进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES                |
| RES     | 进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA    |
| SHR     | 共享内存大小，单位kb                                         |
| S       | 进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程 |
| %CPU    | 上次更新到现在的CPU时间占用百分比                           |
| %MEM    | 进程使用的物理内存百分比                                    |
| TIME+   | 进程使用的CPU时间总计，单位1/100秒                          |
| COMMAND | 进程名称（命令名/命令行）                                    |

**交互命令**
- h：显示帮助画面，给出一些简短的命令总结说明；
- k：终止一个进程；
- i：忽略闲置和僵死进程，这是一个开关式命令；
- q：退出程序；
- r：重新安排一个进程的优先级别；
- S：切换到累计模式；
- s：改变两次刷新之间的延迟时间（单位为s），如果有小数，就换算成ms。输入0值则系统将不断刷新，默认值是5s；
- f或者F：从当前显示中添加或者删除项目；
- o或者O：改变显示项目的顺序；
- l：切换显示平均负载和启动时间信息；
- m：切换显示内存信息；
- t：切换显示进程和CPU状态信息；
- c：切换显示命令名称和完整命令行；
- M：根据驻留内存大小进行排序；
- P：根据CPU使用百分比大小进行排序；
- T：根据时间/累计时间进行排序；
- w：将当前设置写入~/.toprc文件中。

## du 指令

## find 指令

## service 指令(重点)

## kill 指令(重点)

## killall 指令

## ifconfig 指令(重点)

## reboot 指令

重新启动计算机

**语法**
```bash
reboot

reboot -w  # 模拟重启，但是不重启（只写关机与开机的日志信息）
```
## shutdown 指令
关机  （慎用）

**语法**
```bash
shutdown # 取消 shutdown -C 或者ctrl + c

shutdown -h now # 指定现在立即关机

shutdown -h 15:25 '关机提示' # 15:25 关机并弹出警告‘关机提示’ 

shutdown +5 "System will shutdown after 5 minutes" # 指定5分钟后关机，同时送出警告信息给登入用户：
```

**参数说明**
- r：shutdown之后重新启动；
- h：将系统关机；

## uptime 指令

输出计算机的持续在线时间（计算机从开机到现在运行的时间）

**语法**
```bash
uptime

uptime -V # 显示版本
```
![uptime 指令](/blogs/images/linux/uptime.png)

## uname 指令

获取计算机操作系统相关信息

**语法**
```bash
uname 

uname -a
```
![uname 指令](/blogs/images/linux/uname.png)

**参数说明**
- a或--all：显示全部的信息；
## netstat 指令

用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况。

**语法**
```bash
netstat(选项)

netstat -at       #列出所有tcp端口
netstat -l        #只显示监听端口
netstat -lt       #只列出所有监听 tcp 端口
netstat -st       #显示TCP端口的统计信息
```
![netstat 指令](/blogs/images/linux/netstat.png)

**参数说明**
- a或--all：显示所有连线中的Socket；
- p或--programs：显示正在使用Socket的程序识别码和程序名称；
- l或--listening：显示监控中的服务器的Socket；
- n或--numeric：直接使用ip地址，而不通过域名服务器；
- t或--tcp：显示TCP传输协议的连线状况；

## scp 指令

用于在Linux下进行远程拷贝文件的命令

**语法**
```bash
scp(选项)(参数)

# 从远处复制文件到本地目录
scp root@10.10.10.10:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/

# 从远处复制到本地
scp -r root@10.10.10.10:/opt/soft/mongodb /opt/soft/

# 上传本地文件到远程机器指定目录
scp /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest

# 上传本地目录到远程机器指定目录
scp -r /opt/soft/mongodb root@10.10.10.10:/opt/soft/scptest
```