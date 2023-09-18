import { Button, Icon } from '../../../views/common'
import { ArrowSimpleIcon } from '../../../images'
import { Dropdown } from '../../UIComponents'
import UserMenu from './UserMenu'

const Navigation = () => {
  return (
    <Dropdown
      button={
        <Button transparentBtn label='Главная' iconView='light' dropdownLabel
          // onClick={(e)=> console.log('onClick')}
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
  )
}

export default Navigation