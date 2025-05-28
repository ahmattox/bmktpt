import * as styles from './TuesdayNightCube.module.css'

import React, { useState } from 'react'

import { discordServerLink } from 'config.js'
import { OffsiteIcon } from '../icons/OffsiteIcon'

export const TuesdayNightCube: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.notice}>
        <h3>Temporary Location Change</h3>
        <p>
          We&rsquo;ll be organizing in a nearby location while NLB is relocating
          to their new space. Check the discord for updates!
        </p>
      </div>

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
            Drafts start promptly at 6:30. No sign ups are required. Arrive
            early if you can (or ping someone in the discord) so we can organize
            pods according to the number of players.
          </p>

          <p>
            Be sure to support our great LGS! Buy a drink, Magic supplies, or
            game pass so they can keep the literal lights on.
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
            (message me or ask someone at cube night for an invite) to stay in
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
