import { FC } from 'react'
import cn from 'classnames'

import { CommonConst } from '../../const'

import { HeaderRNDType } from './types'
import style from './index.module.scss'

const HeaderRND: FC<HeaderRNDType> = ({ label }) => {
  return (
    <div className={cn(CommonConst.CLASSNAME.headerRND, style.header)}>
      <span className={style.header__label}>{label}</span>
    </div>
  )
}

export default HeaderRND