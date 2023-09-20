import cn from 'classnames'

import { CommonConst, BlockModuleConst } from '../../../const'
import CoilTable from './CoilTable'
import style from './index.module.scss'

import ContainerRND from '../../ContainerRND'

const Main = () => {
  const MODULES: Record<string, JSX.Element> = {
    [BlockModuleConst.BLOCKS.coils.name]: <CoilTable />,
    [BlockModuleConst.BLOCKS.aboutDefect.name]: <div>defect desc</div>,
    [BlockModuleConst.BLOCKS.aboutCoil.name]: <div>coil desc</div>,
    [BlockModuleConst.BLOCKS.map.name]: <div>map</div>,
    [BlockModuleConst.BLOCKS.cameras.name]: <div>cameras type</div>,
    [BlockModuleConst.BLOCKS.defectKinds.name]: <div>defect types</div>,
    [BlockModuleConst.BLOCKS.photo.name]: <div>photo</div>,
    [BlockModuleConst.BLOCKS.snapshots.name]: <div>snapshots</div>,
    [BlockModuleConst.BLOCKS.snapshotsInfo.name]: <div>snapshot info</div>,
  }

  return (
    <div
      className={cn(style.container, CommonConst.CLASSNAME.mainPageParentRND)}
    >
      {
        Object.keys(BlockModuleConst.BLOCKS).map(block => {
          const elem = BlockModuleConst.BLOCKS[block]
          const elemName = elem.name
          const module = MODULES[elemName as keyof typeof MODULES]
          return (
            <div
              key={elem.name}
              style={{
                gridColumn: elem['grid-column'] ?? '',
                gridRow: elem['grid-row'] ?? '',
                position: 'relative'
              }}
            >
              <ContainerRND backgroundColor={elem.backgroundColor ?? ''}>
                {module}
              </ContainerRND>

            </div>
          )
        })
      }
    </div>
  )
}

export default Main