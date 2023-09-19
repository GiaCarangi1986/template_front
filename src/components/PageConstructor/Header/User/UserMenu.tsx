import React, { FC } from 'react'

import { Button } from '../../../../views/common'

import { UserMenuProps } from './types'
import style from './index.module.scss'

const UserMenu: FC<UserMenuProps> = ({onDropdownClick = () => null}) => {
  return (
    <div className={style.user_menu__container}>
      <p className={style.user_menu__user}>Иван Андреевич Петров</p>
      <Button fullWidth onClick={onDropdownClick} label='Выйти' />
    </div>
  )
}

export default UserMenu
