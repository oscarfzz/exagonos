module.exports = {
  pathPrefix: "/leonids",
  siteMetadata: {
    title: `Leonids`,
    author: {
      name: `@ry_zou`,
      summary: `web dev`,
    },
    description: `A simple, fixed sidebar two columns Gatsby.js blog starter.`,
    siteUrl: `https://renyuanz.github.io/leonids`,
    social: {
      twitter: `ry_zou`,
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
}
