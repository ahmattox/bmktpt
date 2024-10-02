import * as styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Link } from 'gatsby'

import { discordServerLink } from 'config.js'

import Layout from 'components/layout/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.intro}>
        <p>
          The <strong>Baltimore [Bun] Magic Kitchen Table Pro Tour</strong> is
          an informal Magic: the Gathering playgroup in Baltimore, MD, mostly in
          the Hampden, Old Goucher, and Remington neighborhoods.
        </p>

        <p>
          We play often at{' '}
          <a
            href="https://www.nolandbaltimore.com"
            className={classNames(
              styles.bigLink,
              styles.link2,
              styles.external
            )}
          >
            No Land Beyond
          </a>
          , a fantastic local game store and board game bar.
        </p>

        <p>
          We play a lot of{' '}
          <a
            href="http://luckypaper.co/what-is-a-cube/"
            className={classNames(
              styles.bigLink,
              styles.link3,
              styles.external
            )}
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
            className={classNames(
              styles.bigLink,
              styles.link2,
              styles.external
            )}
          >
            NLB
          </a>{' '}
          for a draft!
        </p>

        <p>
          Come hang out in our{' '}
          <a
            href={discordServerLink}
            className={classNames(
              styles.bigLink,
              styles.link1,
              styles.external
            )}
          >
            Discord
          </a>{' '}
          (message me for an invite).
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <title>BMKTPT</title>
      <meta
        name="description"
        content="The Baltimore [Bun] Magic Kitchen Table Pro Tour is an informal Magic: the Gathering playgroup in Baltimore, MD. We play a lot of Cube."
      />
    </>
  )
}

export default IndexPage
