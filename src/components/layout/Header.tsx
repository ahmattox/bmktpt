import * as styles from './Header.module.css'

import React from 'react'
import { Link } from 'gatsby'

interface Props {}

export const Header: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.title}>BMKTPT</h1>
      </Link>

      <div>Baltimore [Bun] Magic Kitchen Table Pro Tour</div>
    </div>
  )
}
