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
        name: `Instagram`,
        url: `https://instagram.com/wischnx`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/wischn`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/wischn`,
      }
    ],
    menuLinks:[
      {
        name:'about',
        link:'/about',
      },
      {
        name:'portfolio',
        link:'/portfolio',
      },
      {
        name:'contact',
        link:'/contact',
      },
      {
        name:'blog',
        link:'/blog',
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4m06a32a5fay`,
        accessToken: `Il_EIAw5mbPKpJVHvnnnQ2tMSQaSytCzakne4qyaneo`,
      },
    },
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
