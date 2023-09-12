import { FC, useState } from 'react'
import cn from 'classnames'

import { CommonUtils } from '../../utils'

import { DropdownProps } from './types'
import style from './index.module.scss'

const Dropdown: FC<DropdownProps> = ({
  children,
  id,
  button,
  placement = 'bottom'
}) => {
  const [open, setOpen] = useState(false)

  document.onclick = function (e: MouseEvent) {
    const _id = (e.target as HTMLDivElement).id
    if (id === _id) {
      setOpen(!open)
    } else if (open) {
      setOpen(false)
    }
  }

  const placementStyle = CommonUtils.getPlacementStyle(placement)

  return (
    <div style={{ position: 'relative' }}>
      {CommonUtils.addPropsToChildren(button, { id })}
      <div
        className={cn(style.dropdown, { [style.hide]: !open })}
        style={placementStyle}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown