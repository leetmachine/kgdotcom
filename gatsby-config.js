module.exports = {
  siteMetadata: {
    title: 'Keegan Gladstone',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }  
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'keegan-gladstone',
        short_name: 'kg.com',
        start_url: '/',
        background_color: '#DDAF36',
        theme_color: '#DDAF36',
        display: 'minimal-ui',
        icon: 'src/images/keegan-icon.jpeg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
