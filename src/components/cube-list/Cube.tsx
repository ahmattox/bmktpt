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
    imagePosition?: string
    color: string
  }
}

export const Cube: React.FC<Props> = (props) => {
  const { cube } = props

  return (
    <a href={cube.link} key={cube.id} className={styles.container}>
      <img
        src={cube.imageURL}
        alt=""
        className={styles.backgroundImage}
        role="presentation"
      />
      <div
        className={styles.backgroundOverlay}
        style={{ backgroundColor: cube.color }}
      />

      <img
        src={cube.imageURL}
        alt=""
        className={styles.image}
        role="presentation"
        style={
          cube.imagePosition != null
            ? { objectPosition: cube.imagePosition }
            : {}
        }
      />
      <div className={styles.details}>
        <div className={styles.name}>{cube.name}</div>
        <div className={styles.owner}>{cube.owner}</div>
        <div className={styles.description}>{cube.description}</div>
      </div>
    </a>
  )
}
