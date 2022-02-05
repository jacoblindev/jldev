module.exports = {
    lang: 'en-US',
    title: 'JDevNotes',
    description: 'This is Jacob Lin\'s personal blog site',

    themeConfig: {
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