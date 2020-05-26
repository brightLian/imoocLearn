module.exports = {
    title: 'web安全学习',  // 设置网站标题
    description : 'Web前后端漏洞分析与防御',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: 'icon/favicon.png' }]
        ],
        logo: '/image/banner.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/chapterFirst/first' },
        ],
        sidebarDepth: 2,
        displayAllHeaders: true,
        editLinks: true,
        docsBranch: 'master',
        sidebar: [
            {
                title: '第1章 课程介绍',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                    '/chapterFirst/second.md'
                ]
            },
            {
                title: '第2章 环境搭建',
                path: '/chapterSecond/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md'
                ]
            },
            {
                title: '第3章 前端XSS',
                path: '/chapterThird/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterThird/first.md',
                    '/chapterThird/second.md',
                    '/chapterThird/third.md',
                    '/chapterThird/fourth.md',
                    '/chapterThird/fifth.md',
                    '/chapterThird/sixth.md',
                    '/chapterThird/seventh.md',
                    '/chapterThird/eighth.md',
                ]
            },
            {
                title: '第4章 前端CSRF',
                path: '/chapterFourth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFourth/first.md',
                    '/chapterFourth/second.md',
                    '/chapterFourth/third.md',
                    '/chapterFourth/fourth.md',
                    '/chapterFourth/fifth.md',
                    '/chapterFourth/sixth.md',
                    '/chapterFourth/seventh.md'
                ]
            },
            {
                title: '第5章 前端Cookies问题',
                path: '/chapterFifth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFifth/first.md',
                    '/chapterFifth/second.md',
                    '/chapterFifth/third.md',
                    '/chapterFifth/fourth.md'
                ]
            },
            {
                title: '第6章 前端点击劫持问题',
                path: '/chapterSixth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSixth/first.md',
                    '/chapterSixth/second.md',
                    '/chapterSixth/third.md'
                ]
            },
            {
                title: '第7章 传输安全',
                path: '/chapterSeventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSeventh/first.md',
                    '/chapterSeventh/second.md',
                    '/chapterSeventh/third.md',
                    '/chapterSeventh/fourth.md',
                    '/chapterSeventh/fifth.md',
                ]
            },
            {
                title: '第8章 密码安全',
                path: '/chapterEighth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEighth/first.md',
                    '/chapterEighth/second.md',
                    '/chapterEighth/third.md',
                    '/chapterEighth/fourth.md',
                    '/chapterEighth/fifth.md',
                    '/chapterEighth/sixth.md',
                    '/chapterEighth/seventh.md',
                ]
            },
            {
                title: '第9章 接入层注入问题',
                path: '/chapterNinth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterNinth/first.md',
                    '/chapterNinth/second.md',
                    '/chapterNinth/third.md',
                    '/chapterNinth/fourth.md',
                    '/chapterNinth/fifth.md',
                    '/chapterNinth/sixth.md',
                    '/chapterNinth/seventh.md',
                    '/chapterNinth/eighth.md',
                    '/chapterNinth/ninth.md',
                ]
            },
            {
                title: '第10章 接入层上传问题',
                path: '/chapterTenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTenth/first.md',
                    '/chapterTenth/second.md',
                    '/chapterTenth/third.md',
                    '/chapterTenth/fourth.md',
                    '/chapterTenth/fifth.md',
                ]
            },
            {
                title: '第11章 社会工程学和信息泄露',
                path: '/chapterEleventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEleventh/first.md',
                    '/chapterEleventh/second.md',
                    '/chapterEleventh/third.md',
                    '/chapterEleventh/fourth.md'
                ]
            },
            {
                title: '第12章 其他安全问题',
                path: '/chapterTwelfth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTwelfth/first.md',
                    '/chapterTwelfth/second.md'
                ]
            },
            {
                title: '第13章 课程总结',
                path: '/chapterThirteenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterThirteenth/first.md',
                    '/chapterThirteenth/second.md',
                ]
            }
        ]
    }
};
