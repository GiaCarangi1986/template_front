import cn from 'classnames'

import {CommonConst, BlockModuleConst} from '../../../const'
import {
    CoilTable,
    DefectDescription,
    CoilDescription,
    DefectFilter,
    CameraFilter,
    DefectMap,
    Photo,
    SnapshotDescription,
    Snapshots
} from "./index";
import ContainerRND from '../../ContainerRND'

import style from './index.module.scss'

const Main = () => {
    const MODULES: Record<string, JSX.Element> = {
        [BlockModuleConst.BLOCKS.coils.name]: <CoilTable/>,
        [BlockModuleConst.BLOCKS.aboutDefect.name]: <DefectDescription/>,
        [BlockModuleConst.BLOCKS.aboutCoil.name]: <CoilDescription/>,
        [BlockModuleConst.BLOCKS.map.name]: <DefectMap/>,
        [BlockModuleConst.BLOCKS.cameras.name]: <CameraFilter/>,
        [BlockModuleConst.BLOCKS.defectKinds.name]: <DefectFilter/>,
        [BlockModuleConst.BLOCKS.photo.name]: <Photo/>,
        [BlockModuleConst.BLOCKS.snapshots.name]: <Snapshots/>,
        [BlockModuleConst.BLOCKS.snapshotsInfo.name]: <SnapshotDescription/>,
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
                            <ContainerRND
                                variant={elem.variant}
                                bounds={CommonConst.CLASSNAME.mainPageParentRND}
                                name={elem.name}
                                headerLabel={elem.headerLabel}
                            >
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