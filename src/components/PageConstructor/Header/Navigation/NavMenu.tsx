import React, { FC, MouseEventHandler } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'

import { RouterConst } from '../../../../const'

import { NavMenuProps } from './types'
import style from './index.module.scss'

const NavMenu: FC<NavMenuProps> = ({ onDropdownClick = () => null }) => {
  const { pathname } = useLocation();

  return (
    <div className={style.menu}>
      {Object.keys(RouterConst.DESCRIPTION).map((key) => {
        const elem = RouterConst.DESCRIPTION[key]
        return (
          <NavLink
            key={elem.pageName}
            to={elem.path}
            className={cn(style.menu__item, {
              [style['menu__item-active']]: pathname === elem.path
            })}
            onClick={onDropdownClick as unknown as MouseEventHandler<HTMLAnchorElement>}
          >
            {elem.title}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavMenu