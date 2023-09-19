import { useLocation } from 'react-router-dom'

import { Button, Icon } from '../../../../views/common'
import { ArrowSimpleIcon } from '../../../../images'
import { Dropdown } from '../../../UIComponents'
import NavMenu from './NavMenu'
import { RouterConst } from '../../../../const'

import style from './index.module.scss'

const Navigation = () => {
  const { pathname } = useLocation()
  const router = Object.keys(RouterConst.DESCRIPTION).find(el => RouterConst.DESCRIPTION[el].path === pathname)
  const label = router ? RouterConst.DESCRIPTION[router].title : ''

  return (
    <div className={style.navigation}>
      <Dropdown
        button={
          <Button
            transparentBtn
            label={label}
            iconView='light'
            dropdownLabel
            dropdownrotate={1}
          >
            <Icon
              height={20}
              width={20}
            >
              <ArrowSimpleIcon />
            </Icon>
          </Button>
        }
        placement='bottom'
      >
        <NavMenu />
      </Dropdown>
    </div>
  )
}

export default Navigation