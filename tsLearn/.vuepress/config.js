module.exports = {
    title: 'TypeScript学习',  // 设置网站标题
    description : 'TypeScript －系统入门到项目实战',
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
                title: '第1章 课程导学',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                ]
            },
            {
                title: '第2章 TypeScript基础语法入门',
                path: '/chapterSecond/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md',
                    '/chapterSecond/third.md',
                    '/chapterSecond/fourth.md',
                    '/chapterSecond/fifth.md',
                    '/chapterSecond/sixth.md',
                    '/chapterSecond/seventh.md',
                    '/chapterSecond/eighth.md',
                    '/chapterSecond/ninth.md',
                    '/chapterSecond/tenth.md',
                    '/chapterSecond/eleventh.md',
                    '/chapterSecond/twelfth.md',
                    '/chapterSecond/thirteenth.md',
                    '/chapterSecond/fourteenth.md',
                    '/chapterSecond/fifteenth.md'
                ]
            },
            {
                title: '第3章 使用 TypeScript 编写爬虫工具',
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
                    '/chapterThird/seventh.md'
                ]
            },
            {
                title: '第4章 TypeScript 语法进阶',
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
                    '/chapterFourth/seventh.md',
                    '/chapterFourth/eighth.md',
                    '/chapterFourth/ninth.md',
                    '/chapterFourth/tenth.md',
                    '/chapterFourth/eleventh.md',
                    '/chapterFourth/twelfth.md',
                    '/chapterFourth/thirteenth.md',
                    '/chapterFourth/fourteenth.md'
                ]
            },
            {
                title: '第5章 使用 Express 框架开发数据爬取及展示接口',
                path: '/chapterFifth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFifth/first.md',
                    '/chapterFifth/second.md',
                    '/chapterFifth/third.md',
                    '/chapterFifth/fourth.md',
                    '/chapterFifth/fifth.md'
                ]
            },
            {
                title: '第6章 TypeScript 高级语法',
                path: '/chapterSixth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSixth/first.md',
                    '/chapterSixth/second.md',
                    '/chapterSixth/third.md',
                    '/chapterSixth/fourth.md',
                    '/chapterSixth/fifth.md',
                    '/chapterSixth/sixth.md',
                    '/chapterSixth/seventh.md',
                    '/chapterSixth/eighth.md',
                    '/chapterSixth/ninth.md'
                ]
            },
            {
                title: '第7章 Express 项目代码改良',
                path: '/chapterSeventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSeventh/first.md',
                    '/chapterSeventh/second.md',
                    '/chapterSeventh/third.md',
                    '/chapterSeventh/fourth.md',
                    '/chapterSeventh/fifth.md',
                    '/chapterSeventh/sixth.md'
                ]
            },
            {
                title: '第8章 使用 React 编写爬取数据的展示页面',
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
                    '/chapterEighth/eighth.md',
                    '/chapterEighth/ninth.md'
                ]
            },
            {
                title: '第9章 课程总结',
                path: '/chapterNinth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterNinth/first.md',
                ]
            }
        ]
    }
};
