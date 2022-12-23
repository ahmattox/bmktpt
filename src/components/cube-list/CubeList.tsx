import * as styles from './CubeList.module.css'

import React from 'react'
import { Cube } from './Cube'

interface Props {
  cubes: {
    link: string
    name: string
    owner: string
    id: string
    description: string
    category: string
    imageURL?: string
  }[]
}

export const CubeList: React.FC<Props> = (props) => {
  const { cubes } = props

  return (
    <div className={styles.container}>
      {cubes.map((cube) => (
        <Cube cube={cube} />
      ))}
    </div>
  )
}
