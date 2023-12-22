module.exports = {
    title: 'xiaoxuan6 的随记',
    description: '笔记文档',
    base: '/notes-news/',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    plugins: [
        ['vuepress-plugin-code-copy', true],
        '@vuepress-reco/extract-code'
    ],
    themeConfig: {
        logo: '/32762220.jpg',
        lastUpdated: '最后更新时间',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助改进页面内容!',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Git', link: '/git/'},
            {text: 'Linux', link: '/linux/'},
            {text: 'Docker', link: '/docker/'},
            {text: 'Go', link: '/go/'},
            {text: 'PHP', link: '/php/'},
            {text: '前端', link: '/js/'},
            {text: '杂项', link: '/other/'},
            {text: '博客', link: 'https://xiaoxuan6.vercel.app', target: '_blank'},
            {
                text: '开源项目', items: [
                    {text: 'ChatGPT', link: 'https://xiaoxuan6.github.io/chatgpt-server', target: '_blank'},
                    {text: '会员视频解析', link: 'https://xiaoxuan6.github.io/free-vip-video', target: '_blank'},
                    {text: '用户假数据生成器', link: 'https://xiaoxuan6.github.io/faker', target: '_blank'},
                ]
            },
            {text: 'Github', link: 'https://github.com/xiaoxuan6', target: '_blank'},
        ],
        sidebar: {
            '/git/': [
                'git设置Verified',
                'git提交commit使用gpg-agent每天只需要一次输入密码',
                'includeif',
                'submodule',
                'sparsecheckout'
            ],
            '/docker/': [
                'docker卸载',
                'docker多阶构建',
                'docker安装',
                'docker容器无法访问外网',
                'docker-compose安装',
                'docker-v2安装',
                'docker-compose无法访问php',
            ],
            '/linux/': [
                'grep',
                '常用命令',
                'ipconfig',
                'oh_my_zsh',
                '从window访问wsl地址',
                'Linux常用命令之xargs',
                'sub_filter',
            ],
            '/go/': [
                '常见的低级错误'
            ],
            '/php/': [
                '安装composer'
            ],
            '/js/': [
                'nprogress',
                'notiflix',
                'axios'
            ],
            '/other/': [
                'WSL安装和卸载'
            ]
        }
    }
}
