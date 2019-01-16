module.exports = {
  title: "bloging",
  description: "some notes about cs",
  markdown: {
    anchor: {
      permalink: false
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    nav: [
      { text: '博文', link: '/posts/' },
      { text: '关于', link: '/about/' },
      {
        text: 'Follow Me',
        items: [
          { text: 'Github', link: 'https://www.github.com/lerencao' },
        ]
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: "Last Updated"
  }
}

