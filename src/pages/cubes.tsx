import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout/Layout'

import { CubeMenu } from 'components/cube-menu/CubeMenu'

const CubesPage: React.FC<PageProps<Queries.CubesPageQuery>> = (props) => {
  const { data } = props

  return (
    <Layout>
      <CubeMenu cubes={data.allCubesYaml.cubes} />
    </Layout>
  )
}

export const query = graphql`
  query CubesPage {
    allCubesYaml {
      cubes: nodes {
        link
        name
        owner
        id
        description
        category
        imageURL
        color
        defunct
      }
    }
  }
`

export const Head = () => {
  return (
    <>
      <title>BMKTPT - Cube Menu</title>
      <meta
        name="description"
        content="Paper Cubes in the Baltimore Magic Kitchen Table Pro Tour Community"
      />
    </>
  )
}

export default CubesPage
