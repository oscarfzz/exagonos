module.exports = {
  siteMetadata: {
    title: `Leonids`,
    author: {
      name: `@ry_zou`,
      summary: `web dev`,
    },
    description: `Conoce Exagonos uno de los ✅ mejores Restaurantes en Parla ✅ Llevamos más de 50 años ofreciendo calidad a nuestros clientes.`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://exagonosparla.es`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'es'
      }
    }
  ],
}
