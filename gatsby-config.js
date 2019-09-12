const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Luke Does Stuff',
    author: 'Luke Herrington',
    description:
      'The personal site of, me, Luke Herrington 👋🏻✨🏄🌐',
  },
  plugins: [
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          }
        ]
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luke Herrington\'s Site',
        short_name: 'Luke\'s Website',
        start_url: '/',
        background_color: 'white',
        theme_color: '#00CCFF',
        display: 'minimal-ui',
        icon: './src/images/luke-square-sm.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
