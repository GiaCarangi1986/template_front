import { Button } from '../../../views/common'
import { BlockModuleConst } from '../../../const'

import style from './index.module.scss'

const RndButtons = () => {
  return (
    <div className={style.rnd_btns}>
      <div className={style.rnd_btns__block}>
        {Object.keys(BlockModuleConst.BLOCKS).map(el => {
          const elem = BlockModuleConst.BLOCKS[el]
          return <Button key={elem.name} view='light'>{elem.btnLabel}</Button>
        })}
      </div>
      <Button view='light'>исх.</Button>
    </div>
  )
}

export default RndButtons