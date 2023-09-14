import { Button, Icon } from '../../../views/common'
import { UserIcon } from '../../../images'
import { Dropdown } from '../../UIComponents'
import UserMenu from './UserMenu'

const User = () => {
  return (
    <Dropdown
      button={
        <Button iconView='light' transparentBtn>
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
      <UserMenu/>
    </Dropdown>
  )
}

export default User