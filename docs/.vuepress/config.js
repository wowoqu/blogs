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
            {
                text: 'Linux',
                items: [
                    { text: 'Linux', link: '/linux/' },
                    { text: 'Shell', link: '/shell/' },
                    { text: 'Vim', link: '/vim/' }
                ]
            },
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
                        'BaseCommand',
                        'AdvanceCommand'
                    ],
                },
                {
                    title: '进阶',
                    collapsable: false,
                    children: [
                        'Extend',
                        'RunMode',
                        'UserManagement',
                        'UserGroupManagement',
                        'NetWorkSetting',
                        'BootOption',
                        'NtpService',
                        'FireWall',
                        'PackageManagement',
                        'Cron',
                        'Permission'
                    ],
                },
            ],
            '/shell/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        '',
                    ],
                }
            ],
            '/vim/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        '',
                    ],
                }
            ]
        },
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}