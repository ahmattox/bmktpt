import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BMKTPT`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/images/icon.png'
    //   }
    // },
    'gatsby-plugin-mdx',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
  ]
}

export default config
