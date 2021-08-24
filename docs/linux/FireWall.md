# Firewall 设置

```shell
# 设置开机启用防火墙
systemctl enable firewalld.service

# 设置开机禁用防火墙
systemctl disable firewalld.service

# 启动防火墙
systemctl start firewalld

# 关闭防火墙
systemctl stop firewalld

# 检查防火墙状态
systemctl status firewalld 


# 查看防火墙状态
firewall-cmd --state

# 重新加载配置
firewall-cmd --reload

# 查看开放的端口
firewall-cmd --list-ports

# 开启防火墙端口
firewall-cmd --zone=public --add-port=9200/tcp --permanent

# 命令含义：
# –zone #作用域
# –add-port=9200/tcp #添加端口，格式为：端口/通讯协议
# –permanent #永久生效，没有此参数重启后失效
# 注意：添加端口后，必须用命令firewall-cmd --reload重新加载一遍才会生效

# 关闭防火墙端口
firewall-cmd --zone=public --remove-port=9200/tcp --permanent
```