import { FC, useState } from 'react'
import cn from 'classnames'

import { CommonUtils } from '../../utils'

import { DropdownProps } from './types'
import style from './index.module.scss'

const Dropdown: FC<DropdownProps> = ({
  children,
  button,
  placement = 'bottom'
}) => {
  const [open, setOpen] = useState(false)

  document.onclick = () => setOpen(false)
  const handleClick = () => setOpen(!open)

  const placementStyle = CommonUtils.getPlacementStyle(placement)

  return (
    <div style={{ position: 'relative' }} onClick={e=>e.stopPropagation()}>
      {CommonUtils.addPropsToChildren(button, { onClick: handleClick})}
      <div
        className={cn(style.dropdown, { [style.hide]: !open })}
        style={placementStyle}
      >
        {CommonUtils.addPropsToChildren(children, { onDropdownClick: handleClick})}
      </div>
    </div>
  )
}

export default Dropdown