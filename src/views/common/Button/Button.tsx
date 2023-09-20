import { CSSProperties, FC } from 'react'
import cn from 'classnames'

import { CommonUtils } from '../../../utils'

import { ButtonProps } from './types'
import style from './index.module.scss'

const DEFAULT_HEIGHT = 34

const Button: FC<ButtonProps> = ({
  children,
  view = 'dark',
  withoutEffects = false,
  height = DEFAULT_HEIGHT,
  iconView,
  transparentBtn,
  fullWidth,
  fullClickable,
  label,
  dropdownLabel,
  iconRotate,
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

  const labelClassNames = cn(style.label, {
    [style['label__dropdown']]: dropdownLabel,
  })

  return (
    <button
      className={classNames}
      style={{
        '--height': `${height}px`
      } as CSSProperties}
      {...props}
    >
      {label && (
        <p className={labelClassNames}>
          {label}
        </p>
      )}
      {CommonUtils.addPropsToChildren(children, { rotate: iconRotate })}
    </button>
  )
}

export default Button