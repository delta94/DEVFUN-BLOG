module.exports = {
  siteMetadata: {
    title: 'My Blog',
    author: 'Shyn',
    description: 'A collection of my thoughts and writings.',
    siteUrl: 'https://amberley.blog/',
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/amber1ey'
      },
      {
        name: 'github',
        url: 'https://github.com/amberleyromo'
      }
    ],
    blogsPerPage: 10
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify',
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-yaml`,
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shyn blog`,
        short_name: `shyn`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `static/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/NetlifyCMS/`
      }
    },
    'gatsby-plugin-netlify'
  ]
};
