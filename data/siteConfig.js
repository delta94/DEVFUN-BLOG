module.exports = {
  siteTitle: 'DEVFUN',
  siteDescription: 'A Gatsby theme/starter to build lightning-fast websites',
  authorName: 'Shyn',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.
  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'gatsby-starter-morning-dew',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/'
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew'
    },
    {
      label: 'Installation',
      url: '/how-to-install'
    }
  ],

  /* manifest.json */
  manifestName: 'DevFun blog',
  manifestShortName: 'DevFun', // max 12 characters
  manifestStartUrl: '/index.html',
  manifestBackgroundColor: 'white',
  manifestThemeColor: '#666',
  manifestDisplay: 'standalone',
  icon: 'content/images/icon.png',

  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com'
  },
  authorSocialLinks: [
    { name: 'github', url: 'https://github.com/tranthaison1231' },
    { name: 'twitter', url: 'https://twitter.com/tranthaison1231' },
    { name: 'facebook', url: 'https://www.facebook.com/Love.Ren.348' }
  ]
};
