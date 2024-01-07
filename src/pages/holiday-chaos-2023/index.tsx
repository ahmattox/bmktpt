import * as styles from './index.module.css'

import React from 'react'

import Layout from 'src/components/layout/Layout'

export const HolidayChaosPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <div className={styles.heading1}>
            2023/2024 BMKTPT Magic the Gathering
          </div>
          <div className={styles.heading2}>Annual Holiday</div>
          <div className={styles.heading3}>Chaos Draft!!!</div>
        </h1>

        <div className={styles.details}>
          <div className={styles.detailsSection}>
            <div>Bring 3 Different Draftable MTG Booster Packs</div>

            <div>January 6 &bull; 6PM</div>
            <div className={styles.secondaryInfo}>
              The shop opens at 5, drafting starts at 6
            </div>
          </div>

          <div className={styles.detailsSection}>
            <div>
              <a href="https://www.nolandbaltimore.com">No Land Beyond</a>
            </div>
            <div className={styles.secondaryInfo}>2125 Maryland Avenue</div>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <h2 className={styles.secondaryHeading}>Sign Up</h2>

          <p>Free Registration</p>

          <p>Sign Up with the Magic Companion App</p>

          <p>
            <div className={styles.eventCode}>8M47JJ2</div>
          </p>
        </div>

        <div className={styles.detailsSection}>
          <h2 className={styles.secondaryHeading}>Booster Pack Details</h2>
          <p>
            Any, playable, 14/15 card, english, booster pack is allowed. This
            includes &rdquo;draft boosters&ldquo; from any premier set, or
            collectors boosters if you&rsquo;re feeling spicy. Supplemental set
            such as a masters sets and even un-sets are ok too!
          </p>
          <p>Bring 3 different packs. No Land Beyond has a variety in stock!</p>
          <p>
            Things that are not allowed: set boosters, theme boosters, Jump
            Start, 8 card Homelands Packs, a sealed commander deck, non-english
            cards. Larger commander set packs are discouraged.
          </p>
        </div>

        <div className={styles.detailsSection}>
          <h2 className={styles.secondaryHeading}>Draft Details</h2>
          <p>
            Following BMKTPT tradition, we&rsquo;ll draft in{' '}
            <em>one big pod!</em>
          </p>
          <p>
            A chaos draft works like a normal booster draft but with mixed up
            cards from any sets people bring.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HolidayChaosPage
