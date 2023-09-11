import { FC, CSSProperties } from 'react'
import cn from 'classnames'

import { PropsType } from './types'
import style from './index.module.scss'

const DEFAULT_SIZE = 20

const Icon: FC<PropsType> = ({
  children, width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  view = 'dark',
  withoutEffects = false
}) => {
  const classNames = cn(style.component, {
    [style[`component__${view}`]]: view,
    [style['component__without_effects']]: withoutEffects
  })
  return (
    <div className={classNames} style={{
      '--width': `${width}px`,
      '--height': `${height}px`
    } as CSSProperties}
    >
      {children}
    </div>
  )
}

export default Icon