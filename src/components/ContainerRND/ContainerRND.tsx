import { FC } from 'react'
import { Rnd } from 'react-rnd'

import { CommonConst } from '../../const'
import { setZIndex } from '../../utils/rnd'

import { ContainerRNDProps } from './types'

const ContainerRND: FC<ContainerRNDProps> = ({ children, backgroundColor, bounds }) => {
  return (
    <Rnd
      default={{
        width: '100%', height: '100%', x: 0, y: 0,
      }}
      style={{ backgroundColor }}
      className={CommonConst.CLASSNAME.headerRND}
      onResizeStart={(e, dir, data) => {
        data.style.zIndex = setZIndex();
      }}
      onDragStart={(e, data) => {
        data.node.style.zIndex = setZIndex();
      }}
      dragGrid={[5, 5]}
      resizeGrid={[5, 5]}
      bounds={`.${bounds}`}
    >
      {children}
    </Rnd>
  )
}

export default ContainerRND