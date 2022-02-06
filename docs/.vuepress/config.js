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
                text: 'About',
                link: '/about/',
            },
            // NavbarGroup
            {
                text: 'Notes',
                link: '/notes/',
                // children: [
                //     {
                //         text: 'Frontend',
                //         link: '/frontend/',
                //     },
                //     {
                //         text: 'Backend',
                //         link: '/backend/',
                //     },
                // ],
            },
            {
                text: 'Projects',
                children: [
                    {
                        text: 'Abc',
                        link: '/abc/',
                    },
                ]
            }
            // string - page file path
            // '/bar/README.md',
        ],
    },
}