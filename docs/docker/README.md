# 介绍

## Docker 是什么
Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

## Docker 安装

以下为 CentOS 系统安装 Docker 的教程。

### 使用官方安装脚本自动安装

安装命令如下: 

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun
```

也可以使用国内 daocloud 一键安装命令: 

```shell
curl -sSL https://get.daocloud.io/docker | sh
```

### 手动安装

#### 卸载旧版本

```shell
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

#### 安装 docker 基础包

```shell
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

#### 设置稳定仓库

```shell
yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 安装Docker Engine - Community

- 安装最新版本(latest)
```shell
yum install docker-ce docker-ce-cli containerd.io
```

- 安装指定版本
```shell
yum list docker-ce --showduplicates | sort -r  #查看版本
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io #安装指定版本
```

#### 启动与测试

```shell
sudo systemctl start docker  # 启动docker
docker run hello-world  #测试
```

![Docker 安装](/blogs/images/docker/install.png)

::: warning 警告
CentOS8 已默认安装 podman，功能与 docker 类似，如需在 CentOS8 上安装 docker，则需要先卸载 podman。

```shell
yum list podman-manpages  #查看 podman-manpages
yum remove podman-manpages.noarch  #卸载podman-manpages.noarch
```
:::