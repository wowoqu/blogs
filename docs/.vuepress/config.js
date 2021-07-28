module.exports = {
    title: 'wowoqu的博客',
    description: '救赎之道，就在其中',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/images/logo/びじん1.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/images/logo/びじん1.png',  // 导航logo
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },  // 内链
            { text: '技术文档', link: '/tech/interview/' },
            { text: '简书主页', link: 'https://www.jianshu.com/u/c455567c7f50' },  // 外链
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },  // 页面跳转行为
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [  // 列表
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {
                text: 'Languages',
                items: [  // 分组
                    { text: 'Group1', items: [/*  */] },
                    { text: 'Group2', items: [/*  */] }
                ]
            }
        ],
        sidebar: 'auto', // 侧边栏配置
        lastUpdated: 'Last Updated', // 最后更新时间
        smoothScroll: true,  // 页面滚动
    }
}