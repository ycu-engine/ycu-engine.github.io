module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: 'Engine',
    siteUrl: `https://ycu-engine.github.io`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { '@': 'src' },
        extensions: [],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `activity_log`,
        path: `${__dirname}/src/data/activity_log`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `meta`,
        path: `${__dirname}/src/data/meta`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-990F70B9NT'],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
}
