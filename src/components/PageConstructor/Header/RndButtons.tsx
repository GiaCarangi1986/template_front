import { BlockModuleConst } from '../../../const'

// import style from './index.module.scss'

const RndButtons = () => {
  return (
    <div>
      {Object.keys(BlockModuleConst.BLOCKS).map(el => {
        const elem = BlockModuleConst.BLOCKS[el]
        return <button>{elem.btnLabel}</button>
      })}
    </div>
  )
}

export default RndButtons