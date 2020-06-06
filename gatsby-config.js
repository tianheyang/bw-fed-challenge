module.exports = {
  siteMetadata: {
    title: `Tianhe Yang - Bukwild FED Challenge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        lang: `en`,
        name: `data`,
        path: `${__dirname}/src/data/`,
        start_url: `/`,
      },
    },
    `gatsby-transformer-json`
  ],
  pathPrefix: "/bw-fed-challenge",
}
