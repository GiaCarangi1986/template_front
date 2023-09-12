import { FC } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { LayoutProps } from './types'
import style from './index.module.scss'

const Layout: FC<LayoutProps> = ({ children, headerTemplate }) => {
  return (
    <div className={style.component}>
      <Header template={headerTemplate} />
      <div
        // className={style.content}
      >
        {children}
      </div>
      <Footer />

    </div>
  )
}

export default Layout