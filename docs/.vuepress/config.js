module.exports = {
    title: 'xiaoxuan6 的随记',
    description: 'A documentation website powered by VuePress',
    base: '/notes-news/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/32762220.jpg',
        lastUpdated: '最后更新时间',
        nav: [
            {text: 'Home', link: '/'},
            {text: '博客', link: 'https://xiaoxuan6.github.io', target: '_blank'},
            {
                text: '开源项目', items: [
                    {text: 'ChatGPT', link: 'https://xiaoxuan6.github.io/chatgpt-server', target: '_blank'},
                    {text: '会员视频解析', link: 'https://xiaoxuan6.github.io/free-vip-video', target: '_blank'},
                    {text: '用户假数据生成器', link: 'https://xiaoxuan6.github.io/faker', target: '_blank'},
                ]
            },
            {text: 'Github', link: 'https://github.com/xiaoxuan6', target: '_blank'},
        ],
        sidebar: [
            {
                title: 'linux',
                collapsable: true, // 如果 collapsable 属性设置为 true，则表示这个章节可以被展开或者折叠。如果设置为 false，则表示这个章节将一直保持打开状态。
                children: [
                    '/linux/grep.md',
                    '/linux/常用命令.md',
                    '/linux/ipconfig.md',
                    '/linux/oh_my_zsh.md',
                    '/linux/从window访问wsl地址.md'
                ]
            },
            {
                title: 'docker',
                collapsable: true,
                children: [
                    '/docker/docker卸载.md',
                    '/docker/docker多阶构建.md',
                    '/docker/docker安装.md',
                    '/docker/docker容器无法访问外网.md',
                    '/docker/docker-compose安装.md',
                    '/docker/docker-v2安装.md',
                    '/docker/docker-compose无法访问php.md',
                ]
            },
            {
                title: '面试题',
                collapsable: true,
                children: [
                    '/interview/inter.md'
                ]
            },
            {
                title: 'Go',
                collapsable: true,
                children: [
                    '/go/常见的低级错误.md'
                ]
            }
        ]
    }
}
