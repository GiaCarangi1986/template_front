import { Dropdown } from '../../../UIComponents'
import { UserIcon } from '../../../../images'
import { Button, Icon } from '../../../../views/common'
import UserMenu from './UserMenu'

const User = () => {
  return (
    <Dropdown
      button={
        <Button transparentBtn iconView='light'>
          <Icon
            height={20}
            width={20}
          >
            <UserIcon />
          </Icon>
        </Button>
      }
      placement='bottom_end'
    >
      <UserMenu />
    </Dropdown>
  )
}

export default User