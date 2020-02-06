module.exports = {
  siteMetadata: {
    title: `wischn`,
    description: `Manufaktur nachhaltiger Digitalisierung`,
    author: `Annika Wischnewsky`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/wischnx`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/wu17mine`,
      },
    ],
    menuLinks:[
      {
        name:'home',
        link:'/',
      },
      {
        name:'blog',
        link:'/blog',
      },
      {
        name:'about',
        link:'/about',
      },
      {
        name:'contact',
        link:'/contact',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // {
    // resolve: `gatsby-source-filesystem`,
    // options: {
    //   name: `posts`,
    //   path: `${__dirname}/src/posts/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0f1a13`,
        theme_color: `#0f1a13`,
        display: `minimal-ui`,
        icon: `src/assets/images/png/icon_fl.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/svg/`,
        }
      }
    }
  ],
}
