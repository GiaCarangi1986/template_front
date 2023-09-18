import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import { CommonUtils } from '../../utils'

import { DropdownProps } from './types'
import style from './index.module.scss'

const Dropdown: FC<DropdownProps> = ({
  children,
  button,
  placement = 'bottom'
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    /**
     * setOpen(false) if clicked on outside of element
     */
    function handleClickOutside (event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    // Bind the event listener
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  }, [wrapperRef])

  const handleClick = () => {
    console.log('handleClick')
    setOpen(!open)
  }

  const placementStyle = CommonUtils.getPlacementStyle(placement)

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative' }}
    >
      {CommonUtils.addPropsToChildren(button, { onClick: handleClick })}
      <div
        className={cn(style.dropdown, { [style.hide]: !open })}
        style={placementStyle}
      >
        {CommonUtils.addPropsToChildren(children, { onDropdownClick: handleClick })}
      </div>
    </div>
  )
}

export default Dropdown