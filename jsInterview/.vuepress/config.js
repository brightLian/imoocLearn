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
                title: '第1章 课程介绍',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                    '/chapterFirst/second.md',
                    '/chapterFirst/third.md',
                    '/chapterFirst/fourth.md',
                    '/chapterFirst/fifth.md',
                    '/chapterFirst/sixth.md'
                ]
            },
            {
                title: '第2章 JS基础-变量类型和计算',
                path: '/chapterSecond/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md',
                    '/chapterSecond/third.md',
                    '/chapterSecond/fourth.md'
                ]
            },
            {
                title: '第3章 JS基础-原型和原型链',
                path: '/chapterThird/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterThird/first.md',
                    '/chapterThird/second.md',
                    '/chapterThird/third.md',
                    '/chapterThird/fourth.md',
                    '/chapterThird/fifth.md'
                ]
            },
            {
                title: '第4章 JS基础-作用域和闭包',
                path: '/chapterFourth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFourth/first.md',
                    '/chapterFourth/second.md',
                    '/chapterFourth/third.md',
                    '/chapterFourth/fourth.md',
                    '/chapterFourth/fifth.md',
                    '/chapterFourth/sixth.md'
                ]
            },
            {
                title: '第5章 JS基础-异步',
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
                title: '第6章 JS-Web-API-DOM',
                path: '/chapterSixth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSixth/first.md',
                    '/chapterSixth/second.md',
                    '/chapterSixth/third.md',
                    '/chapterSixth/fourth.md',
                    '/chapterSixth/fifth.md',
                    '/chapterSixth/sixth.md'
                ]
            },
            {
                title: '第7章 JS-Web-API-BOM',
                path: '/chapterSeventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSeventh/first.md'
                ]
            },
            {
                title: '第8章 JS-Web-API-事件',
                path: '/chapterEighth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEighth/first.md',
                    '/chapterEighth/second.md',
                    '/chapterEighth/third.md'
                ]
            },
            {
                title: '第9章 JS-Web-API-Ajax',
                path: '/chapterNinth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterNinth/first.md',
                    '/chapterNinth/second.md',
                    '/chapterNinth/third.md',
                    '/chapterNinth/fourth.md',
                    '/chapterNinth/fifth.md',
                    '/chapterNinth/sixth.md'
                ]
            },
            {
                title: '第10章 JS-Web-API-存储',
                path: '/chapterTenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTenth/first.md',
                    '/chapterTenth/second.md'
                ]
            },
            {
                title: '第11章 开发环境',
                path: '/chapterEleventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEleventh/first.md',
                    '/chapterEleventh/second.md',
                    '/chapterEleventh/third.md',
                    '/chapterEleventh/fourth.md',
                    '/chapterEleventh/fifth.md',
                    '/chapterEleventh/sixth.md',
                    '/chapterEleventh/seventh.md',
                    '/chapterEleventh/eighth.md',
                    '/chapterEleventh/ninth.md',
                    '/chapterEleventh/tenth.md',
                    '/chapterEleventh/eleventh.md',
                    '/chapterEleventh/twelfth.md'
                ]
            },
            {
                title: '第12章 运行环境',
                path: '/chapterTwelfth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTwelfth/first.md',
                    '/chapterTwelfth/second.md',
                    '/chapterTwelfth/third.md',
                    '/chapterTwelfth/fourth.md',
                    '/chapterTwelfth/fifth.md',
                    '/chapterTwelfth/sixth.md',
                    '/chapterTwelfth/seventh.md',
                    '/chapterTwelfth/eighth.md',
                    '/chapterTwelfth/ninth.md',
                    '/chapterTwelfth/tenth.md',
                    '/chapterTwelfth/eleventh.md'
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
            },
            {
                title: '第14章 真题模拟',
                path: '/chapterFourteenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFourteenth/first.md',
                    '/chapterFourteenth/second.md',
                    '/chapterFourteenth/third.md',
                    '/chapterFourteenth/fourth.md',
                    '/chapterFourteenth/fifth.md',
                    '/chapterFourteenth/sixth.md',
                    '/chapterFourteenth/seventh.md',
                    '/chapterFourteenth/eighth.md',
                    '/chapterFourteenth/ninth.md',
                    '/chapterFourteenth/tenth.md',
                    '/chapterFourteenth/eleventh.md',
                    '/chapterFourteenth/twelfth.md',
                    '/chapterFourteenth/thirteenth.md'
                ]
            }
        ]
    }
};
