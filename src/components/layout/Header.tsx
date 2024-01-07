import * as styles from './Header.module.css'

import React from 'react'
import { Link } from 'gatsby'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Link to="/">
          <h1 className={styles.title}>BMKTPT</h1>
        </Link>

        <div className={styles.subtitle}>
          Baltimore [Bun] Magic Kitchen Table Pro Tour
        </div>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <Link
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              About
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link
              to="/cubes/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Cubes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
