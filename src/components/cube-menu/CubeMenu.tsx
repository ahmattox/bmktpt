import * as styles from './CubeMenu.module.css'

import React, { useMemo } from 'react'
import { groupBy } from 'lodash'

import { CubeList } from 'components/cube-list/CubeList'

import { TuesdayNightCube } from './TuesdayNightCube'
import { MenuHeading } from './MenuHeading'

interface Props {
  cubes: Queries.CubesPageQuery['allCubesYaml']['cubes']
}

export const CubeMenu: React.FC<Props> = (props) => {
  const { cubes } = props

  const groups = useMemo(() => {
    const grouped = groupBy(
      cubes.filter((cube) => cube.defunct !== true),
      (c) => c.category
    )

    return {
      cubes: grouped['cube'],
      other: grouped['other']
    }
  }, [cubes])

  return (
    <div className={styles.container}>
      <TuesdayNightCube />

      <div className={styles.list}>
        <MenuHeading>
          BMKTPT Cube Menu - {groups.cubes.length} Lists
        </MenuHeading>

        <CubeList cubes={groups.cubes} />
      </div>

      <div className={styles.list}>
        <MenuHeading>
          Other Cuboid Formats - {groups.other.length} Lists
        </MenuHeading>

        <CubeList cubes={groups.other} />
      </div>

      <div>
        <p>
          List managed by Anthony Mattox. In the playgroup and want to add your
          Cube? Let me know{' '}
          <a href="https://discordapp.com/users/226747568866983938">
            on Discord
          </a>
          .
        </p>
      </div>
    </div>
  )
}
