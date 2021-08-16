# 进阶指令

这里主要介绍以下 Linux 系统常用的进阶指令。

## df 指令

df命令用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为KB。

**语法**
```shell
df -h
```
![df 指令](/blogs/images/linux/df.png)
```shell
# Filesystem 分区
# Size 大小
# Used 已用
# Available 可用
# Use% 已用百分比
# Mounted on 挂载点
```

**参数说明**
- h 以容易理解的格式列出文件大小(1K、1M、1G)。

## free 指令

free命令可以显示当前系统未使用的和已使用的内存数目，还可以显示被内核使用的内存缓冲区。

**语法**
```shell
free(选项)
```
![free 指令](/blogs/images/linux/free.png)

```shell
# total 总内存大小
# used 已使用内存大小
# free 真正尚未被使用的物理内存数量
# shared 被共享使用的物理内存大小
# buff/cache 被 buffer 和 cache 使用的物理内存大小
# available 还可以被应用程序使用的物理内存大小 (available  = free + buffer + cache)
# swap 交换空间(虚拟内存)，当内存不够用时，可用部分磁盘空间转话为虚拟内存使用
```

**参数说明**
- b：以Byte为单位显示内存使用情况
- k：以KB为单位显示内存使用情况
- m：以MB为单位显示内存使用情况
- o：不显示缓冲区调节列
- s`<间隔秒数>`：持续观察内存使用状况
- t：显示内存总和列

## head 指令

查看一个文件的前n行，如果不指定n，则默认前10行。

**语法**
```shell
head -n 10
```
![head 指令](/blogs/images/linux/head.png)

**参数说明**
- n`<数字>`：指定显示头部内容的行数

## tail 指令

查看一个文件末行，如果不指定n，则默认显示后10行。

**语法**
```shell
tail -n 10

tail -f
```
![tail 指令](/blogs/images/linux/tail.png)

**参数说明**
- n`<数字>`：指定显示头部内容的行数
- f`<name/descriptor>`或；--follow`<nameldescript>`：显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。“-f”与“-fdescriptor”等效(一般用来看日志)

## less 指令

查看文件，以较少的内容进行输出，按下辅助键（**数字，回车，空格，上下**）

**语法**
```shell
less 文件名
```
![less 指令](/blogs/images/linux/less.png)

## wc 指令

用于统计文件内容信息

**语法**
```shell
wc -lwc 文件名
```
![wc 指令](/blogs/images/linux/wc.png)

**参数说明**
- c：只显示Bytes数；                                                          
- l：只显示列数；
- w：只显示字数。

## data 指令(重点)

显示或设置系统时间与日期

**语法**
```shell
date # 输出时间

date +%F # 输出 年月日

date "+%F %T" # 输出 年月日 时分秒

date -d "-1 day" "+%F %T" # 获取前一天的时间
```
![date 指令](/blogs/images/linux/date.png)

**参数说明**
- d`<字符串>`：显示字符串所指的日期与时间。字符串前后必须加上双引号
- s`<字符串>`：根据字符串来设置日期与时间。字符串前后必须加上双引号

**扩展**
```shell
# 加减操作

date +%Y%m%d                   # 显示前天年月日
date -d "+1 day" +%Y%m%d       # 显示前一天的日期
date -d "-1 day" +%Y%m%d       # 显示后一天的日期
date -d "-1 month" +%Y%m%d     # 显示上一月的日期
date -d "+1 month" +%Y%m%d     # 显示下一月的日期
date -d "-1 year" +%Y%m%d      # 显示前一年的日期
date -d "+1 year" +%Y%m%d      # 显示下一年的日期

# 检查一组命令花费的时间
start=$(date +%s)
nmap man.linuxde.net &> /dev/null

end=$(date +%s)
difference=$(( end - start ))
echo $difference seconds.
```

## cal 指令

用于显示当前日历，或者指定日期的日历。

**语法**
```shell
cal # 直接输出当前月份的日历 (cal -1)

cal -3 # 输出上一个月，本月，下一个月日历

cal -y 年份 # 表示输出某一年份日历

cal -m # 从周一开始（默认从周日开始）
```
![cal 指令](/blogs/images/linux/cal.png)

**参数说明**
- l：显示单月输出。
- 3：显示临近三个月的日历。
- s：将星期日作为月的第一天。
- m：将星期一作为月的第一天。
- j：显示“julian”日期。
- y：显示当前年的日历。

## clear/ctrl + l 指令

清除终端中已经存在的命令和结果

**语法**
```shell
clear # 或者 按下快捷键 ctrl + l
```

## 管道 (重点)

管道一般可用于过滤，特殊，扩展处理

**语法**
```shell
# 管道不能单独使用，必须配合前面所讲的一些指令来一起使用，其作用主要是辅助作用。

ls / | grep a # 过滤包含a的文件/文件夹名（grep用于过滤）

# 以管道作为分界线，前面的命令有个输出，后面需要先输入，然后再过滤，最后再输出，通俗的将就是管道前面的输出就是后面指令的输入。

# grep指令：主要用于过滤
```
![管道 指令](/blogs/images/linux/管道.png)