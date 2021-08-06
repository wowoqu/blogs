# 基础指令

这里主要介绍以下 Linux 系统常用的基本指令

## ls 指令

打印指定目录下的文件及子目录，如果不指定目录，则默认当前目录

**语法**
```shell
ls -alh [name...]
```
![ls 指令](/blogs/images/linux/ls.png)

**参数说明**
- a 显示所有文件及目录(包括隐藏文件)。
- h 以容易理解的格式列出文件大小(1K、1M、1G)。
- l 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来。

## pwd 指令

查看当前工作目录的完整路径

**语法**
```shell
pwd
```
![pwd 指令](/blogs/images/linux/pwd.png)

**参数说明**
- L 目录连接链接时，输出连接路径-P 输出物理路径
- P 输出物理路径

## cd 指令

切换当前目录至指定目录

**语法**
```shell
cd [dirName]
```
![pwd 指令](/blogs/images/linux/cd.png)

**使用示例**
```shell
cd - # 切换到上一次的目录

cd ~ # 返回到用户的家目录，管理员是 /root/， 普通用户是 /home/[用户名]/

cd ../xxx # 返回到当前目录的父目录下的 xxx (相对地址)

cd /xxx # 返回根目录下的 xxx (绝对地址)
```

## mkdir 指令

## touch 指令

## cp 指令

## mv 指令

## rm 指令

## vim 指令

## 输出重定向

## cat 指令