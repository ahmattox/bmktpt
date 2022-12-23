import * as styles from './Cube.module.css'

import React from 'react'

interface Props {
  cube: {
    link: string
    name: string
    owner: string
    id: string
    description: string
    category: string
    imageURL?: string
  }
}

export const Cube: React.FC<Props> = (props) => {
  const { cube } = props

  return (
    <a href={cube.link} key={cube.id} className={styles.container}>
      <img src={cube.imageURL} alt="" className={styles.backgroundImage} />

      <img src={cube.imageURL} alt="" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.name}>{cube.name}</div>
        <div className={styles.owner}>{cube.owner}</div>
        <div className={styles.description}>{cube.description}</div>
      </div>
    </a>
  )
}
