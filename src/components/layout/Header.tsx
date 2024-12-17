import * as styles from './Header.module.css'

import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { OffsiteIcon } from '../icons/OffsiteIcon'

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
              Local Cube Menu
            </Link>
          </li>
          <li className={styles.linkItem}>
            <a
              href="http://thesaltbox.fun"
              className={classNames(styles.link, styles.saltBox)}
            >
              The Salt Box
              <OffsiteIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
