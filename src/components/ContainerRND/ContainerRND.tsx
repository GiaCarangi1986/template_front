import {FC, useState} from 'react'
import {Rnd} from 'react-rnd'
import cn from 'classnames'

import {CommonConst} from '../../const'
import {setZIndex} from '../../utils/rnd'
import HeaderRND from './HeaderRND'
import {useAppSelector} from "../../store/hooks";

import {ContainerRNDProps, BlockRndType} from './types'
import style from './index.module.scss'

const INIT_RECT: BlockRndType = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
}

const ContainerRND: FC<ContainerRNDProps> = ({
                                                 children,
                                                 bounds,
                                                 name,
                                                 headerLabel,
                                                 variant
                                             }) => {
    const btns = useAppSelector((state) => state.mainWidgets)

    const [block, setBlock] = useState<BlockRndType>(INIT_RECT)
    const [active, setActive] = useState(false)
    const handleActive = () => setActive(!active)

    const modal = btns.find(el => el.name === name)

    return (
        <Rnd
            default={INIT_RECT}
            className={cn(CommonConst.CLASSNAME.containerRND, style.container, {
                [style.container_active]: active,
                [style[`container_${variant}`]]: variant,
                [style.hide]: !modal?.show
            })}
            onResizeStart={(e, dir, data) => {
                data.style.zIndex = setZIndex()
            }}
            onDragStart={(e, data) => {
                data.node.style.zIndex = setZIndex()
                handleActive()
            }}
            onDragStop={(e, d) => {
                setBlock({...block, x: d.x, y: d.y})
                handleActive()
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setBlock({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position,
                })
            }}
            size={{width: block.width, height: block.height}}
            position={{x: block.x, y: block.y}}
            dragGrid={[5, 5]}
            resizeGrid={[5, 5]}
            bounds={`.${bounds}`}
            dragHandleClassName={CommonConst.CLASSNAME.headerRND}
            onMouseDown={() => console.log('onClick')}
        >
            <>
                <HeaderRND label={headerLabel} name={name}/>
                <div className={style.body}>{children}</div>
            </>
        </Rnd>
    )
}

export default ContainerRND