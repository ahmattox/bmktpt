import * as styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Link } from 'gatsby'

import { discordServerLink } from 'config.js'

import Layout from 'src/components/layout/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.intro}>
        <p>
          The <strong>Bun [or Baltimore] Magic Kitchen Table Pro Tour</strong>{' '}
          is an informal Magic: the Gathering playgroup in Baltimore, MD, mostly
          in the Charles Village and Station North neighborhoods.
        </p>

        <p>
          Come hang out in our{' '}
          <a
            href={discordServerLink}
            className={classNames(styles.bigLink, styles.link1)}
          >
            Discord
          </a>{' '}
          (message me for an invite).
        </p>

        <p>
          We play often at{' '}
          <a
            href="https://www.nolandbaltimore.com"
            className={classNames(styles.bigLink, styles.link2)}
          >
            No Land Beyond
          </a>
          , a fantastic local game store and board game bar.
        </p>

        <p>
          We play a lot of{' '}
          <a
            href="http://luckypaper.co/what-is-a-cube/"
            className={classNames(styles.bigLink, styles.link3)}
          >
            Cube
          </a>
          . Check out the menu of{' '}
          <Link
            to="/cubes/"
            className={classNames(styles.bigLink, styles.link4)}
          >
            local Cubes
          </Link>
          . Join us any{' '}
          <Link
            to="/cubes/"
            className={classNames(styles.bigLink, styles.link4)}
          >
            Tuesday
          </Link>{' '}
          night at 6:30 at{' '}
          <a
            href="https://www.nolandbaltimore.com"
            className={classNames(styles.bigLink, styles.link2)}
          >
            NLB
          </a>{' '}
          for a draft!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
