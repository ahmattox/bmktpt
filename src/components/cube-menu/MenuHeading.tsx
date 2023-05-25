import * as styles from './MenuHeading.module.css'

import React from 'react'

interface Props {
  children: string
}

export const MenuHeading: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <div className={styles.rule} />
      <h3 className={styles.heading}>{children}</h3>
    </div>
  )
}
