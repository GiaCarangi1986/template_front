import Cameras from './Cameras'
import Logo from './Logo'

import style from './index.module.scss'

const Header = () => {
  return (
    <header className={style.component}>
      <Logo/>
      <Cameras/>
      {/* {pathname === ROUTE_INFO.main.path && <Cameras />} */}
      {/* {showLinks && <Navigation />} */}
      <div>rnd btns</div>
      {/* <User /> */}
      <div>user</div>
    </header>
  )
}

export default Header