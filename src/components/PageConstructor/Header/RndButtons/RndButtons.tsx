import { Button, Icon } from '../../../../views/common'
import { BlockModuleConst } from '../../../../const'
import { DefaultStateIcon } from '../../../../images'
import { useAppSelector } from '../../../../store/hooks'

import style from './index.module.scss'

const RndButtons = () => {
  const btns = useAppSelector((state: any) => state.mainWidgets)
  return (
    <div className={style.rnd_btns}>
      <div className={style.rnd_btns__block}>
        {Object.keys(BlockModuleConst.BLOCKS).map(el => {
          const elem = BlockModuleConst.BLOCKS[el]
          return <Button key={elem.name} view='light' label={elem.btnLabel} />
        })}
      </div>
      <Button view='light' iconView='light'>
        <Icon><DefaultStateIcon /></Icon>
      </Button>
    </div>
  )
}

export default RndButtons