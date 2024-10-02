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
    imagePosition?: string
    color: string
  }[]
}

export const CubeList: React.FC<Props> = (props) => {
  const { cubes } = props

  return (
    <div className={styles.container}>
      {cubes.map((cube, index) => (
        <Cube cube={cube} key={index} />
      ))}
    </div>
  )
}
