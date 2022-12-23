import * as styles from './Layout.module.css'

import React from 'react'

import { Header } from './Header'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default Layout
