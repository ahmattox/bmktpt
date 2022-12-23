import * as styles from './index.module.css'

import * as React from 'react'
import { Link } from 'gatsby'

import Layout from 'src/components/layout/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.intro}>
        <p>
          The <em>Baltimore [Bun] Magic Kitchen Table Pro Tour</em> is an
          informal Magic the Gathering playgroup in Baltimore, MD, mostly in the
          Charles Village and Station North neighborhoods.
        </p>

        <p>
          Come hang out in{' '}
          <a href="https://discord.gg/RhA8Rh3hr6" className={styles.link1}>
            our Discord
          </a>
        </p>

        <p>
          We play often at{' '}
          <a href="https://www.nolandbaltimore.com" className={styles.link2}>
            No Land Beyond
          </a>
          , a fantastic local game store and board game bar.
        </p>

        <p>
          We play a lot of{' '}
          <a
            href="http://luckypaper.co/what-is-a-cube/"
            className={styles.link3}
          >
            Cube
          </a>
          . Check out{' '}
          <Link to="/cubes/" className={styles.link4}>
            the menu of local cubes
          </Link>
          . Join us any Tuesday night at 6:30 at{' '}
          <a href="https://www.nolandbaltimore.com" className={styles.link2}>
            NLB
          </a>{' '}
          for a draft!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
