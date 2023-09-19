import Logo from './Logo'
import Cameras from './Cameras'
import RndButtons from './RndButtons'
import User from './User'
import Navigation from './Navigation'

import { HeaderTemplateType } from './types'

const MainHeader: HeaderTemplateType[] = [
  {
    elem: <Logo />,
    width: 'min-content',
  },
  {
    elem: <Cameras />,
    width: 'min-content'
  },
  {
    elem: <Navigation />,
    width: 'auto'
  },
  {
    elem: <RndButtons />,
    width: 'minmax(250px, max-content)'
  },
  {
    elem: <User />,
    width: 'min-content'
  }
]

export { MainHeader }