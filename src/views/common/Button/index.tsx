import { CSSProperties, FC } from 'react'
import cn from 'classnames'

import { PropsType } from './types'
import style from './index.module.scss'

const DEFAULT_HEIGHT = 34

const Button: FC<PropsType> = ({
  children,
  view = 'dark',
  withoutEffects = false,
  height= DEFAULT_HEIGHT,
  iconView,
  ...props
}) => {
  const classNames = cn(style.component, {
    [style[`component__${view}`]]: view,
    [style['component__without_effects']]: withoutEffects,
    [style['component__icon_view']]: iconView,
    [style[`component__icon_view_${iconView}`]]: iconView,
  })
  return (
    <button
      className={classNames}
      style={{
        '--height': `${height}px`
      } as CSSProperties}
      {...props}
    >
    {children}
  </button>
  )
}

export default Button