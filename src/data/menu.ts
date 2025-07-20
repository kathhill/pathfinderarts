// src/data/menu.ts

export const headerMenu = [
    { name: 'Mission', link: '/pathfinderarts/theme-info' },
    { name: 'Leadership', link: '/pathfinderarts/team' },
    { name: 'Services', link: '/pathfinderarts/services'},
    { name: 'Blog', link: '/pathfinderarts/blog' },
    { name: 'Style-Guide', link: '/pathfinderarts/style-guide', showArrow: false,
        children: [
            { name: 'Typography', link: '/pathfinderarts/style-guide#typography' },
            { name: 'Colors', link: '/pathfinderarts/style-guide#colors' },
            { name: 'Links', link: '/pathfinderarts/style-guide#links' },
            { name: 'Buttons', link: '/pathfinderarts/style-guide#buttons' },
            { name: 'Forms', link: '/pathfinderarts/style-guide#forms' },
            { name: 'Lists', link: '/pathfinderarts/style-guide#lists' },
        ]
    }
];

export const footerMenu = [
    { name: 'Style Guide', link: '/pathfinderarts/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/pathfinderarts/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/pathfinderarts/legal/terms-of-service' }
];

