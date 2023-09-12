import { Button, Icon } from '../../../views/common'
import { UserIcon } from '../../../images'
import Navigation from './Navigation'
import { CommonConst } from '../../../const'
import { Dropdown } from '../../UIComponents'

const User = () => {
  return (
    <Dropdown
      id={CommonConst.ID.userNavigation}
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
    >
      <Navigation />
    </Dropdown>
  )
}

export default User