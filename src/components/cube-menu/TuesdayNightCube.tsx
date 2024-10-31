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
        every Tuesday night at 6:30pm at{' '}
        <a href="https://www.nolandbaltimore.com">
          No Land Beyond
          <OffsiteIcon />
        </a>
        . All players are welcome.
      </p>

      {showDetails ? (
        <>
          <p>
            We fire drafts promptly at 6:30. No sign ups are required. Just show
            up before the draft. Arrive early if you can (or ping someone in the
            discord) so we have a count of players are can organize pods and set
            up drafts accordingly.
          </p>

          <p>
            While you&rsquo;re here, be sure to support our great LGS! Buy a
            drink, Magic supplies, or game pass so they can keep the literal
            lights on.
          </p>

          <p>
            We have <em>a lot</em> of cubes in the group, so be prepared to
            tackle something different every week.
          </p>

          <p>
            <a href={discordServerLink}>
              The Discord
              <OffsiteIcon />
            </a>{' '}
            (message me for an invite) is the best place to stay in touch. We
            informally organize which Cubes we&rsquo;ll draft there as well as
            share deck lists for each Cube and talk about Magic and more.
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
