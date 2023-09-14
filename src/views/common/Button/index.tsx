import { CSSProperties, FC } from 'react'
import cn from 'classnames'

import { ButtonProps } from './types'
import style from './index.module.scss'

const DEFAULT_HEIGHT = 34

const Button: FC<ButtonProps> = ({
  children,
  view = 'dark',
  withoutEffects = false,
  height= DEFAULT_HEIGHT,
  iconView,
  transparentBtn,
  fullWidth,
  fullClickable,
  ...props
}) => {
  const classNames = cn(style.component, {
    [style[`component__${view}`]]: view,
    [style['component__without_effects']]: withoutEffects,
    [style['component__icon_view']]: iconView,
    [style[`component__icon_view_${iconView}`]]: iconView,
    [style['component__transparent']]: transparentBtn,
    [style['component__full_width']]: fullWidth,
    [style['component__full_clickable']]: fullClickable,
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