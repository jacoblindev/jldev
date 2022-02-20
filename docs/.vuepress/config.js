module.exports = {
    lang: 'en-US',
    title: 'JLDev',
    description: 'This is Jacob Lin\'s personal blog site',
    head: [['link', { rel: 'icon', href: '/logoV2.png' }]],

    themeConfig: {
        logo: '/logoV2@2x.png',
        repo: 'https://github.com/jacoblindev',
        navbar: [
            // NavbarItem
            {
                text: 'Notes',
                link: '/notes/',
            },
            // NavbarGroup
            {
                text: 'Labs',
                children: [
                    {
                        text: 'Abc',
                        link: '/abc/',
                    },
                ]
            },
            {
                text: 'Jacob',
                link: '/about/',
            },
            // string - page file path
            // '/bar/README.md',
        ],
    },
}