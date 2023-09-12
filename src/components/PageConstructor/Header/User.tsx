import { Button, Icon } from '../../../views/common'
import { UserIcon } from '../../../images'

const User = () => {
  return (
    <Button iconView='light' transparentBtn>
      <Icon
        height={20}
        width={20}
      >
        <UserIcon />
      </Icon>
    </Button>
  )
}

export default User