# 服务器运维の骚操作

以下介绍一些 在实际维护服务器会用到的一些技巧。

## Linux 免密登录

### 1. 在本地生成公钥和私钥 (如果已经生成过，跳过该步)

在本地系统打开控制台，并输入以下指令。
```shell
ssh-keygen  # 等同于 ssh-keygen -t rsa
```

输入上面的命令后，一路回车即可。运行结束后，会在本地生成两个文件:

- id_rsa: 私钥
- id_rsa.pub: 公钥

> windows 系统在 `C:\Users\<用户名>\.ssh` 下，linux 则在当前用户家目录下的 `.ssh` 里。

### 2. 将公钥导入到服务器的认证文件中

在刚才的 `.ssh` 目录下打开控制台，并输入以下指令。

```shell
scp id_rsa.pub <用户名>@<服务器地址>:<文件路径>

scp id_rsa.pub root@10.135.193.200:~  # 将文件 id_rsa.pub 发送到 root 用户的 家目录下
```

之后会提示输入密码，输入密码后会将文件发送到服务器。然后我们需要将数据写入到认证文件中。

```shell
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
```

### 3. 更改文件权限
```shell
chmod 755 ~
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

## 强制所有用户密钥登录。

我们需要修改登录配置文件 `/etc/ssh/sshd_config`，然后找到 `PasswordAuthentication` 并修改为 `no`。

```shell
PasswordAuthentication no  # 表示禁止密码方式的认证

systemctl restart sshd # 或者 /etc/init.d/sshd reload
```

## 禁止 root 使用密码登录服务器

我们还是要修改登录配置文件，找到 `PermitRootLogin` 并修改为 `without-password`，当然也可以设置成 `no`。

```shell
PermitRootLogin without-password  # 禁止 root 用户使用密码登录
PermitRootLogin no  # 禁止 root 用户登录
```

## 修改默认登录端口

打开登录配置文件，找到 `# Port 22`, 去掉 `#` 号，并将端口号改成自己想要的端口号，然后重启服务。
```shell
systemctl restart sshd # 或者 /etc/init.d/sshd reload

# 记得打开对应端口的防火墙(firewall/iptabels)，如果是云服务器，则还要在云控制台打开对应的安全策略。
```

经过以上的骚操作，将会使别人更难登录到自己的服务器上。