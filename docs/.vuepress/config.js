const { defaultTheme } = require('@vuepress/theme-default');

module.exports = {
    base: '/jldev/',
    lang: 'en-US',
    title: 'JLDev',
    description: 'This is Jacob Lin\'s personal blog site',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ],

    theme: defaultTheme({
        logo: '/JLDev-Logo@2x.png',
        repo: 'https://github.com/jacoblindev',
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'About',
                link: '/about/',
            },
            {
                text: 'Notes',
                link: '/notes/',
            },
            {
                text: 'Projects',
                children: [
                    {
                        text: 'FM Challenges',
                        link: 'https://jacoblindev.github.io/vue-fm-challenges/',
                    },
                ]
            },
        ],
    }),
}