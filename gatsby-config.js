module.exports = {
  siteMetadata: {
    title: `His Trust Fund`,
    description: `A good place to find out all about the band His Trust Fund`,
    author: `@hisTrustFund`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`Array.prototype.map`, `fetch`]
      },
    },
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lyrics`,
        path: `${__dirname}/src/lyrics`,
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdf`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
        options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

/*

    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false
      },
    }*/

    /*
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },*/