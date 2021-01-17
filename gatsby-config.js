const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Typescript Starter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { '@': 'src' },
        extensions: [],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
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
  ],
}
