import { Button, Icon } from '../../../views/common'
import { ArrowSimpleIcon } from '../../../images'
import { Dropdown } from '../../UIComponents'
import UserMenu from './UserMenu'

import style from './index.module.scss'

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <Dropdown
        button={
          <Button
            transparentBtn
            label='Главная'
            iconView='light'
            dropdownLabel
            dropdownRotate
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
        <UserMenu />
      </Dropdown>
    </div>
  )
}

export default Navigation