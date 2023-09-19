import Logo from '../../PageConstructor/Header/Logo'
import Cameras from '../../PageConstructor/Header/Cameras'
import Navigation from '../../PageConstructor/Header/Navigation'
import RndButtons from '../../PageConstructor/Header/RndButtons'
import User from '../../PageConstructor/Header/User'

import { ModuleGridType } from './types'
import style from './index.module.scss'

const Main = () => {
  const MainModuls: ModuleGridType[] = [
    {
      elem: <div>coil table</div>,
      'grid-column': '1 / 6',
      'grid-row': '1 / 6',
      backgroundColor: 'red'
    },
    {
      elem: <div>map</div>,
      'grid-column': '1 / 10',
      'grid-row': '-1 / -7',
      backgroundColor: 'yellow'
    },
    {
      elem: <div>defect desc</div>,
      'grid-column': '1 / 6',
      'grid-row': '6 / 9',
      backgroundColor: 'orange'
    },
    {
      elem: <div>coil desc</div>,
      'grid-column': '6 / 10',
      'grid-row': '6 / 9',
      backgroundColor: 'green'
    },
    {
      elem: <div>cameras type</div>,
      'grid-column': '6 / 10',
      'grid-row': '1 / 3',
      backgroundColor: 'pink'
    },
    {
      elem: <div>defect types</div>,
      'grid-column': '6 / 10',
      'grid-row': '3 / 6',
      backgroundColor: 'brown'
    },
    {
      elem: <div>snapshot info</div>,
      'grid-column': '-1 / -3',
      'grid-row': '-1 / -6',
      backgroundColor: 'blue'
    },
    {
      elem: <div>snapshots</div>,
      'grid-column': '-1 / -3',
      'grid-row': '1 / -6',
      backgroundColor: 'white'
    },
    {
      elem: <div>photo</div>,
      'grid-column': '10 / -3',
      'grid-row': '1 / -1',
      backgroundColor: 'black'
    },
  ]

  return (
    <div className={style.container}>{
      MainModuls.map(module => {
        return (
          <div
            style={{
              gridColumn: module['grid-column'],
              gridRow: module['grid-row'],
              backgroundColor: module.backgroundColor
            }}
          >
            {module.elem}
          </div>
        )
      })
    }</div>
  )
}

export default Main