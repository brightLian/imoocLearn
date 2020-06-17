module.exports = {
    title: '从ES7到ES11',  // 设置网站标题
    description : 'ECMAScript2016~2020语法全解析',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: 'icon/favicon.png' }]
        ],
        logo: '/image/banner.jpg',
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
                title: 'ECMAScript2016(ES7)',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                    '/chapterFirst/second.md'
                ]
            },
            {
                title: 'ECMAScript2017(ES8)',   // 标题：必要的
                path: '/chapterSecond/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md',
                    '/chapterSecond/third.md',
                    '/chapterSecond/fourth.md',
                ]
            },
            {
                title: 'ECMAScript2018(ES9)',
                path: '/chapterThird/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterThird/first.md',
                    '/chapterThird/second.md',
                    '/chapterThird/third.md',
                    '/chapterThird/fourth.md',
                    '/chapterThird/fifth.md',
                ]
            },
        ]
    }
};
