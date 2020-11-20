module.exports = {
  title: 'Colunmdear个人博客',
  description: 'Colunmdear',
  thirdPartyComponents: {
    fontAwesomeIcons: {
      regular: ['lightbulb'], // Regular font awesome icon keys here
      solid: ['thumbs-up'] // Solid font awesome icon keys here
    }
  },
  themeConfig: {
    // algolia: {
    //   apiKey: '2835d290e600f7fb583e2b61a74032ba',
    //   indexName: 'feathersjs'
    // },
    // logo: '/img/feathers-logo-wide.png',
    // repo: 'feathersjs/feathers',
    // docsRepo: 'feathersjs/docs',
    docsBranch: 'crow',
    editLinks: true,
    sidebarDepth: 2,
    sidebar: {
      "/": [{
          title: '前言',
          collapsable: false,
          children: [
            'introduction/setup.md',
          ]
        }, {
          title: 'React',
          collapsable: false,
          children: [

          ]
        }, {
          title: 'Vue',
          collapsable: false,
          children: [

          ]
        },
        {
          title: 'Ts',
          collapsable: false,
          children: [

          ]
        },
        {
          title: 'Node',
          collapsable: false,
          children: [

          ]
        },
        {
          title: 'Sql',
          collapsable: false,
          children: [

          ]
        }
      ]
    },
    nav: []
  }
};