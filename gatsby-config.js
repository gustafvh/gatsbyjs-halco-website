module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`400`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Gloria Hallelujah`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 5,
        prependToBody: false,
        color: `#3E3E3E`,
        footerHeight: 300,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Halco Website",
        short_name: "Halco",
        start_url: "/",
        background_color: "#3399FF",
        theme_color: "#3399FF",
        display: "standalone",
        icon: "static/favicon.ico",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 940174,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106114786-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: false,
      },
    },
  ],
}
