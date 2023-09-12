import { FC, Fragment } from 'react'

import { HeaderType } from './types'
import style from './index.module.scss'

const Header: FC<HeaderType> = ({template}) => {
  const gridTemplateColumns = template.map(Comp => Comp.width).join(' ')

  return (
    <header className={style.component} style={{gridTemplateColumns}}>
      {template.map((Comp, index) => <Fragment key={index}>{Comp.elem}</Fragment>)}
    </header>
  )
}

export default Header