import * as styles from './cubes.module.css'

import React, { useMemo } from 'react'
import { graphql, PageProps } from 'gatsby'
import { groupBy } from 'lodash'

import Layout from 'components/layout/Layout'
import { CubeList } from 'src/components/cube-list/CubeList'

const CubesPage: React.FC<PageProps<Queries.CubesPageQuery>> = (props) => {
  const { data } = props

  const groups = useMemo(() => {
    const grouped = groupBy(data.allCubesYaml.cubes, (c) => c.category)

    return {
      cubes: grouped['cube'],
      other: grouped['other']
    }
  }, [data.allCubesYaml])

  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <CubeList cubes={groups.cubes} />
        </div>

        <hr className={styles.divider} />

        <div>
          <CubeList cubes={groups.other} />
        </div>

        <hr className={styles.divider} />

        <div>
          <p>
            In the area and want to add your Cube? Let me know{' '}
            <a href="https://discordapp.com/users/226747568866983938">
              on Discord
            </a>{' '}
            or <a href="https://twitter.com/ahmattox">Twitter</a>.
          </p>
        </div>
      </div>
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
      }
    }
  }
`

export default CubesPage
