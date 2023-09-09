import Cameras from './Cameras'
import Logo from './Logo'
import RndButtons from './RndButtons'

import style from './index.module.scss'

const Header = () => {
  return (
    <header className={style.component}>
      <Logo/>
      <Cameras/>
      <RndButtons />
      <div>user</div>
    </header>
  )
}

export default Header