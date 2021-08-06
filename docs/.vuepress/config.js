module.exports = {
    base: '/blogs/',
    title: 'wowoqu的博客',
    description: '技术不完全指北手册',
    head: [
        ['link', { rel: 'icon', href: '/images/logo/panda.png' }]
    ],
    themeConfig: {
        logo: '/images/logo/panda.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Linux', link: '/linux/' },
            { text: 'GitHub', link: 'https://github.com/wowoqu' }
        ],
        sidebar: {
            '/linux/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        '',
                        'Catalog',
                        'BaseCommand'
                    ],
                },
                // {
                //     title: '进阶',
                //     collapsable: false,
                //     children: ['Catalog'],
                // },
            ],
        },
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}