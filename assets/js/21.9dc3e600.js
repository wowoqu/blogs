(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,s,a){"use strict";a.r(s);var r=a(44),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("h2",{attrs:{id:"linux-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-是什么"}},[t._v("#")]),t._v(" Linux 是什么")]),t._v(" "),a("p",[t._v("Linux，全称 GNU/Linux，是一种免费使用和自由传播的类 UNIX 操作系统，其内核由林纳斯·本纳第克特·托瓦兹于 1991 年 10 月 5 日首次发布，它主要受到 Minix 和 Unix 思想的启发，是一个基于 POSIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。它能运行主要的 Unix 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux 有上百种不同的发行版，如基于社区开发的 debian、archlinux，和基于商业开发的 Red Hat Enterprise Linux、SUSE、Oracle Linux 等。")]),t._v(" "),a("h2",{attrs:{id:"常见的-linux-发行版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的-linux-发行版本"}},[t._v("#")]),t._v(" 常见的 Linux 发行版本")]),t._v(" "),a("p",[t._v("Linux 的各个发行版本使用的是同一个 Linux 内核，因此在内核层不存在什么兼容性问题。常见的 Linux 发行版有一下几种：")]),t._v(" "),a("ul",[a("li",[t._v("Debian\n"),a("ul",[a("li",[t._v("Ubuntu")])])]),t._v(" "),a("li",[t._v("Fedora\n"),a("ul",[a("li",[t._v("RHEL (Red Hat)\n"),a("ul",[a("li",[t._v("CentOS")]),t._v(" "),a("li",[t._v("Oracle Linux")])])])])]),t._v(" "),a("li",[t._v("SUSE\n"),a("ul",[a("li",[t._v("SLES\n"),a("ul",[a("li",[t._v("openSUSE")])])])])]),t._v(" "),a("li",[t._v("Gentoo")])]),t._v(" "),a("p",[t._v("以下表格展示了几种常见的 Linux 发行版的各自特点。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("版本名称")]),t._v(" "),a("th",[t._v("特 点")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Debian Linux")]),t._v(" "),a("td",[t._v("开放的开发模式，且易于进行软件包升级")])]),t._v(" "),a("tr",[a("td",[t._v("Fedora Core")]),t._v(" "),a("td",[t._v("拥有数量庞人的用户，优秀的社区技术支持. 并且有许多创新")])]),t._v(" "),a("tr",[a("td",[t._v("CentOS")]),t._v(" "),a("td",[t._v("CentOS 是一种对 RHEL（Red Hat Enterprise Linux）源代码再编译的产物，由于 Linux 是开发源代码的操作系统，并不排斥样基于源代码的再分发，CentOS 就是将商业的 Linux 操作系统 RHEL 进行源代码再编译后分发，并在 RHEL 的基础上修正了不少已知的漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("SUSE Linux")]),t._v(" "),a("td",[t._v("专业的操作系统，易用的 YaST 软件包管理系统")])]),t._v(" "),a("tr",[a("td",[t._v("Gentoo Linux")]),t._v(" "),a("td",[t._v("高度的可定制性，使用手册完整")])]),t._v(" "),a("tr",[a("td",[t._v("Ubuntu")]),t._v(" "),a("td",[t._v("优秀已用的桌面环境，基于 Debian 构建")])])])]),t._v(" "),a("h2",{attrs:{id:"安装准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装准备"}},[t._v("#")]),t._v(" 安装准备")]),t._v(" "),a("p",[t._v("本教程以 CentOS8 发行版为 Linux 学习基础,以 VMware 为系统运行环境。")]),t._v(" "),a("p",[t._v("首先我们需要打开 "),a("a",{attrs:{href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS 官网"),a("OutboundLink")],1),t._v("，选择 CentOS Linux 列的 CentOS8 "),a("code",[t._v("x86_64")]),t._v("(CentOS7 同理)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/download-step1.png",alt:"CentOS 下载"}})]),t._v(" "),a("p",[t._v("在镜像列表中选择任意镜像地址并点击进入，在列表中选择 "),a("code",[t._v("CentOS-8.4.2105-x86_64-dvd1.iso")]),t._v(", 这是其中的一个镜像"),a("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/centos/8.4.2105/isos/x86_64/CentOS-8.4.2105-x86_64-dvd1.iso",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/download-step2.png",alt:"CentOS 下载"}})]),t._v(" "),a("p",[t._v("之后我们需要打开 VMware 的官网，然后找到 VMware Workstation Pro 的"),a("a",{attrs:{href:"https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),a("OutboundLink")],1),t._v("，并下载VMware，之后选择安装。")]),t._v(" "),a("p",[t._v("安装好虚拟机之后，我们开始进行 CentOS 系统的安装工作。")]),t._v(" "),a("h3",{attrs:{id:"_1-打开-vmware-选择创建新的虚拟机。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-打开-vmware-选择创建新的虚拟机。"}},[t._v("#")]),t._v(" 1. 打开 VMware，选择创建新的虚拟机。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.1.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_2-选择自定义-高级-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择自定义-高级-下一步。"}},[t._v("#")]),t._v(" 2. 选择自定义（高级），下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.2.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_3-选择默认兼容性-下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选择默认兼容性-下一步"}},[t._v("#")]),t._v(" 3. 选择默认兼容性，下一步")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.3.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_4-选择稍后安装操作系统-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-选择稍后安装操作系统-下一步。"}},[t._v("#")]),t._v(" 4. 选择稍后安装操作系统，下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.4.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_5-选择-linux-及对应的版本-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-选择-linux-及对应的版本-下一步。"}},[t._v("#")]),t._v(" 5. 选择 Linux 及对应的版本，下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.5.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_6-根据自己的需要设置虚拟机名称和存放位置-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-根据自己的需要设置虚拟机名称和存放位置-下一步。"}},[t._v("#")]),t._v(" 6. 根据自己的需要设置虚拟机名称和存放位置，下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.6.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_7-根据自己电脑的配置设置合适的处理器数量-选择默认-下一步-如果是安装图形化桌面系统-则尽量设置大一点-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-根据自己电脑的配置设置合适的处理器数量-选择默认-下一步-如果是安装图形化桌面系统-则尽量设置大一点-。"}},[t._v("#")]),t._v(" 7. 根据自己电脑的配置设置合适的处理器数量（选择默认），下一步（如果是安装图形化桌面系统，则尽量设置大一点）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.7.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_8-根据自己电脑的配置设置合适的内存大小-选择默认-下一步-如果是安装图形化桌面系统-则尽量设置大一点-必须是-1024-的倍数-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-根据自己电脑的配置设置合适的内存大小-选择默认-下一步-如果是安装图形化桌面系统-则尽量设置大一点-必须是-1024-的倍数-。"}},[t._v("#")]),t._v(" 8. 根据自己电脑的配置设置合适的内存大小（选择默认），下一步（如果是安装图形化桌面系统，则尽量设置大一点，必须是 1024 的倍数）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.8.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_9-设置虚拟机网络连接模式-nat-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-设置虚拟机网络连接模式-nat-。"}},[t._v("#")]),t._v(" 9. 设置虚拟机网络连接模式（NAT）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.9.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_10-选择i-o控制器类型-lsi-logic-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-选择i-o控制器类型-lsi-logic-下一步。"}},[t._v("#")]),t._v(" 10. 选择I/O控制器类型（LSI Logic），下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.10.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_11-选择磁盘类型-scsi-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-选择磁盘类型-scsi-下一步。"}},[t._v("#")]),t._v(" 11. 选择磁盘类型（SCSI），下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.11.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_12-选择创建新虚拟磁盘-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-选择创建新虚拟磁盘-下一步。"}},[t._v("#")]),t._v(" 12. 选择创建新虚拟磁盘，下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.12.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_13-选择合适的磁盘容量-默认-20-g-后续仍可以修改磁盘大小-选择将虚拟磁盘存储为多个文件-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-选择合适的磁盘容量-默认-20-g-后续仍可以修改磁盘大小-选择将虚拟磁盘存储为多个文件-下一步。"}},[t._v("#")]),t._v(" 13. 选择合适的磁盘容量（默认 20 G，后续仍可以修改磁盘大小），选择将虚拟磁盘存储为多个文件，下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.13.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_14-指定磁盘文件存储位置-选择一个合适的位置-下一步。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-指定磁盘文件存储位置-选择一个合适的位置-下一步。"}},[t._v("#")]),t._v(" 14. 指定磁盘文件存储位置，选择一个合适的位置，下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.14.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_15-点击自定义硬件-可设置虚拟机可用的外部硬件设备及配置。之后点击完成-虚拟机创建完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-点击自定义硬件-可设置虚拟机可用的外部硬件设备及配置。之后点击完成-虚拟机创建完成。"}},[t._v("#")]),t._v(" 15. 点击自定义硬件，可设置虚拟机可用的外部硬件设备及配置。之后点击完成，虚拟机创建完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup1.15.png",alt:"setup"}})]),t._v(" "),a("h2",{attrs:{id:"安装-centos8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-centos8"}},[t._v("#")]),t._v(" 安装 CentOS8")]),t._v(" "),a("h3",{attrs:{id:"_1-右击刚创建的虚拟机-选择设置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-右击刚创建的虚拟机-选择设置。"}},[t._v("#")]),t._v(" 1. 右击刚创建的虚拟机，选择设置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.1.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_2-选择cd-dvd-勾选启动时连接-再选择使用iso映像文件最后选择浏览-找到下载好的系统镜像文件-最后确定。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择cd-dvd-勾选启动时连接-再选择使用iso映像文件最后选择浏览-找到下载好的系统镜像文件-最后确定。"}},[t._v("#")]),t._v(" 2. 选择CD/DVD，勾选启动时连接，再选择使用ISO映像文件最后选择浏览，找到下载好的系统镜像文件，最后确定。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.2.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_3-点击开启此虚拟机。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-点击开启此虚拟机。"}},[t._v("#")]),t._v(" 3. 点击开启此虚拟机。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.3.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_4-开启虚拟机后会出现以下界面-鼠标点进黑窗口-使用键盘方向键选择第一项-安装centos-8-回车-系统开始自动安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-开启虚拟机后会出现以下界面-鼠标点进黑窗口-使用键盘方向键选择第一项-安装centos-8-回车-系统开始自动安装。"}},[t._v("#")]),t._v(" 4. 开启虚拟机后会出现以下界面，鼠标点进黑窗口，使用键盘方向键选择第一项，安装CentOS 8，回车，系统开始自动安装。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.4.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_5-选择安装过程中使用的语言-这里选择中文、简体中文-中国-点击继续。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-选择安装过程中使用的语言-这里选择中文、简体中文-中国-点击继续。"}},[t._v("#")]),t._v(" 5. 选择安装过程中使用的语言，这里选择中文、简体中文（中国），点击继续。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.5.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_6-点击网络和主机名-设置网络。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-点击网络和主机名-设置网络。"}},[t._v("#")]),t._v(" 6. 点击网络和主机名，设置网络。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.6.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_7-首先打开网卡开关-然后查看是否能获取到ip地址-更改主机名-点击应用-点击完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-首先打开网卡开关-然后查看是否能获取到ip地址-更改主机名-点击应用-点击完成。"}},[t._v("#")]),t._v(" 7. 首先打开网卡开关，然后查看是否能获取到IP地址，更改主机名，点击应用，点击完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.7.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_8-点击日期和时间-t-设置系统日期时间。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-点击日期和时间-t-设置系统日期时间。"}},[t._v("#")]),t._v(" 8. 点击日期和时间（T），设置系统日期时间。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.8.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_9-时区选择亚洲、上海-设置正确的日期和时间-打开网路时间开关-如果宿主主机已经连接互联网-则会自动校准时间-然后点击完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-时区选择亚洲、上海-设置正确的日期和时间-打开网路时间开关-如果宿主主机已经连接互联网-则会自动校准时间-然后点击完成。"}},[t._v("#")]),t._v(" 9. 时区选择亚洲、上海，设置正确的日期和时间，打开网路时间开关（如果宿主主机已经连接互联网，则会自动校准时间），然后点击完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.9.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_10-点击软件选择-s-选择需要安装的软件系统。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-点击软件选择-s-选择需要安装的软件系统。"}},[t._v("#")]),t._v(" 10. 点击软件选择（S），选择需要安装的软件系统。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.10.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_11-此处系统选择-服务器-安装完成后进入命令行系统-然后点击完成。-若选择带gui的服务器或工作站-安装完成后进入图形化桌面系统-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-此处系统选择-服务器-安装完成后进入命令行系统-然后点击完成。-若选择带gui的服务器或工作站-安装完成后进入图形化桌面系统-。"}},[t._v("#")]),t._v(" 11. 此处系统选择“服务器”，安装完成后进入命令行系统，然后点击完成。（若选择带GUI的服务器或工作站，安装完成后进入图形化桌面系统）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.11.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_12-选择安装目的地-此处可进行磁盘划分-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-选择安装目的地-此处可进行磁盘划分-。"}},[t._v("#")]),t._v(" 12. 选择安装目的地（此处可进行磁盘划分）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.12.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_13-选择我要配置分区-然后点击完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-选择我要配置分区-然后点击完成。"}},[t._v("#")]),t._v(" 13. 选择我要配置分区，然后点击完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.13.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_14-弹出下图界面-点击加号-选择-boot-给boot分区分200m-最后点击添加挂载点。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-弹出下图界面-点击加号-选择-boot-给boot分区分200m-最后点击添加挂载点。"}},[t._v("#")]),t._v(" 14. 弹出下图界面，点击加号，选择/boot，给boot分区分200M，最后点击添加挂载点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.14.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_15-然后以同样的办法给其他分区分配空间-分配完成后点击完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-然后以同样的办法给其他分区分配空间-分配完成后点击完成。"}},[t._v("#")]),t._v(" 15. 然后以同样的办法给其他分区分配空间，分配完成后点击完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.15.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_16-弹出更改摘要界面-点击接受更改。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-弹出更改摘要界面-点击接受更改。"}},[t._v("#")]),t._v(" 16. 弹出更改摘要界面，点击接受更改。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.16.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_17-点击root密码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-点击root密码。"}},[t._v("#")]),t._v(" 17. 点击ROOT密码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.17.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_18-设置完root密码后点击完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-设置完root密码后点击完成。"}},[t._v("#")]),t._v(" 18. 设置完ROOT密码后点击完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.18.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_19-选择开始安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-选择开始安装。"}},[t._v("#")]),t._v(" 19. 选择开始安装。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.19.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_20-等待系统安装完毕重启系统。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-等待系统安装完毕重启系统。"}},[t._v("#")]),t._v(" 20. 等待系统安装完毕重启系统。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup2.20.png",alt:"setup"}})]),t._v(" "),a("h2",{attrs:{id:"配置固定-ip-便于远程管理-桥接模式-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置固定-ip-便于远程管理-桥接模式-。"}},[t._v("#")]),t._v(" 配置固定 ip 便于远程管理（桥接模式）。")]),t._v(" "),a("h3",{attrs:{id:"_1-查看本地局域网-ip、网关及子网掩码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看本地局域网-ip、网关及子网掩码"}},[t._v("#")]),t._v(" 1. 查看本地局域网 ip、网关及子网掩码")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.3.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_1-以root账号登录系统-编辑文件-etc-sysconfig-network-scripts-ifcfg-ens33。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-以root账号登录系统-编辑文件-etc-sysconfig-network-scripts-ifcfg-ens33。"}},[t._v("#")]),t._v(" 1. 以root账号登录系统，编辑文件/etc/sysconfig/network-scripts/ifcfg-ens33。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.1.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_3-通过本地局域网信息-配置ip地址等信息-修改下图红框内容。然后保存配置文件-关闭虚拟机。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过本地局域网信息-配置ip地址等信息-修改下图红框内容。然后保存配置文件-关闭虚拟机。"}},[t._v("#")]),t._v(" 3. 通过本地局域网信息，配置ip地址等信息，修改下图红框内容。然后保存配置文件，关闭虚拟机。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.2.png",alt:"setup"}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上图二为本地局域网、网段及网关，需要按照上图二进行设置")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"static"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置为手动分配IP地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.135.193.288"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置为局域网固定IP")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.135.195.254"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置局域网网关")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.255.255.0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置子网掩码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DNS1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置首选DNS，8.8.8.8为免费DNS服务器的IP地址，也可通过网络共享中心查看本地DNS")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-设置虚拟机的网卡模式。点击编辑虚拟机设置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置虚拟机的网卡模式。点击编辑虚拟机设置。"}},[t._v("#")]),t._v(" 4. 设置虚拟机的网卡模式。点击编辑虚拟机设置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.4.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_5-点击网络适配器-选中启动时连接-选择桥接模式-点击确定。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-点击网络适配器-选中启动时连接-选择桥接模式-点击确定。"}},[t._v("#")]),t._v(" 5. 点击网络适配器，选中启动时连接，选择桥接模式，点击确定。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.5.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_6-网络适配器桥接模式设置成功-如下图。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-网络适配器桥接模式设置成功-如下图。"}},[t._v("#")]),t._v(" 6. 网络适配器桥接模式设置成功，如下图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.6.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_7-点击编辑-点击虚拟网络编辑器。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-点击编辑-点击虚拟网络编辑器。"}},[t._v("#")]),t._v(" 7. 点击编辑，点击虚拟网络编辑器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.7.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_8-在弹出界面点击更改设置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-在弹出界面点击更改设置。"}},[t._v("#")]),t._v(" 8. 在弹出界面点击更改设置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.8.png",alt:"setup"}})]),t._v(" "),a("h3",{attrs:{id:"_9-弹出界面-选择桥接模式-请选择实际联网的网卡接口-然后点击确定。-因为我经常遇到桥接模式选择自动-但是系统无法联网的问题-所以还是选择实际联网的网卡接口-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-弹出界面-选择桥接模式-请选择实际联网的网卡接口-然后点击确定。-因为我经常遇到桥接模式选择自动-但是系统无法联网的问题-所以还是选择实际联网的网卡接口-。"}},[t._v("#")]),t._v(" 9. 弹出界面，选择桥接模式，请选择实际联网的网卡接口，然后点击确定。（因为我经常遇到桥接模式选择自动，但是系统无法联网的问题，所以还是选择实际联网的网卡接口）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blogs/images/linux/setup3.9.png",alt:"setup"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在 2014 年，红帽公司收购了 CentOS ，包含 CentOS 项目商标的所有权，以及大量核心开发人。于 2019 年，CentOS 团队和红帽子合作推出了一个新的滚动版 Linux: CentOS Stream。 此后，于 2020 年末，官宣未来不再维护 CentOS 了，取而代之的是 CentOS Stream。原本计划维护 10 年的 CentOS8 将于 "),a("code",[t._v("2021-12-31")]),t._v(" 停止维护(CentOS7 将于 "),a("code",[t._v("2024-06-30")]),t._v(" 停止维护)。而原本处于 RHEL 下游的 CentOS 则变为了 RHEL 上游的 CentOS Stream，系统稳定性将不如从前。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);