import { LogoRND, LogoMMK } from '../../../images'
import { Icon } from '../../../views/common'

import style from './index.module.scss'

const Logo = () => (
  <div className={style.logo}>
    <Icon height={40} width={40} variant="secondary"><LogoRND/></Icon>
    <Icon height={40} width={40} variant="secondary"><LogoMMK/></Icon>
  </div>
)

export default Logo
