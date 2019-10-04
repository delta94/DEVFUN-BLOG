module.exports = {
  siteTitle: 'DEVFUN',
  siteDescription: 'Devfun - Frontend Web Developer - React/Gatsby/NextJS',
  authorName: 'Shyn',
  twitterUsername: '@tranthaison1231',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.
  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://devfun.tk/',
  disqusSiteUrl: 'https://devfun.tk/',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'gatsby-starter-morning-dew',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],

  /* manifest.json */
  manifestName: 'DEVFUN',
  manifestShortName: 'DEVFUN', // max 12 characters
  manifestStartUrl: '/index.html',
  manifestBackgroundColor: 'white',
  manifestThemeColor: '#666',
  manifestDisplay: 'standalone',
  icon: 'data/icon/icon.png',
  icons: [
    {
      src: '/favicons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/favicons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],

  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  authorSocialLinks: [
    { name: 'github', url: 'https://github.com/tranthaison1231' },
    { name: 'twitter', url: 'https://twitter.com/tranthaison1231' },
    { name: 'facebook', url: 'https://www.facebook.com/Love.Ren.348' },
  ],
};
