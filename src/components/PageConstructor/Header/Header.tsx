import Cameras from './Cameras'
import Logo from './Logo'
import RndButtons from './RndButtons'
import User from './User'

import style from './index.module.scss'

const Header = () => {
  return (
    <header className={style.component}>
      <Logo />
      <Cameras />
      <RndButtons />
      <User />
    </header>
  )
}

export default Header