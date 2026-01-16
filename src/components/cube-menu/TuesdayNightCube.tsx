import * as styles from './TuesdayNightCube.module.css'

import React, { useState } from 'react'

import { discordServerLink } from 'config.js'
import { OffsiteIcon } from '../icons/OffsiteIcon'

export const TuesdayNightCube: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={styles.container}>
      <p>
        We draft{' '}
        <a href="http://luckypaper.co/what-is-a-cube/">
          Cube
          <OffsiteIcon />
        </a>{' '}
        every Tuesday night at 6:15pm at{' '}
        <a href="https://peabodyheightsbrewery.com">
          Peabody Heights Brewery
          <OffsiteIcon />
        </a>{' '}
        401 East 30th Street. All players are welcome.
      </p>

      {showDetails ? (
        <>
          <p>
            Drafts start promptly at 6:30. No sign ups are required. Arrive 15
            minutes in advance so we can organize into pods.
          </p>

          <p>
            There&rsquo;s no entry fee but support the brewery and food trucks
            while you&rsquo;re here.
          </p>

          <p>
            We have <em>a lot</em> of cubes in the group, so be prepared to
            tackle something different every week.
          </p>

          <p>
            Join{' '}
            <a href={discordServerLink}>
              The Discord
              <OffsiteIcon />
            </a>{' '}
            (message me or ask someone at Cube night for an invite) to stay in
            touch. We informally organize which Cubes we&rsquo;ll draft there,
            share deck lists, and talk about Magic and more.
          </p>

          <button
            className={styles.button}
            onClick={() => setShowDetails(false)}
          >
            Hide Details &uarr;
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.button}
            onClick={() => setShowDetails(true)}
          >
            Event Details &darr;
          </button>
        </>
      )}
    </div>
  )
}
