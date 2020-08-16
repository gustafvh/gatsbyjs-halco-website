module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify`,
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
        icon: "src/assets/images/logo.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
