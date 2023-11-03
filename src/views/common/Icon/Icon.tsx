import {FC, CSSProperties} from 'react'
import cn from 'classnames'

import {Utils} from '../../../helpers'

import {IconProps} from './types'
import style from './index.module.scss'

const DEFAULT_SIZE = 15

const Icon: FC<IconProps> = ({
                                 children, width = DEFAULT_SIZE,
                                 height = DEFAULT_SIZE,
                                 view = 'dark',
                                 withoutEffects = false,
                                 rotate
                             }) => {
    const classNames = cn(style.component, {
        [style[`component__${view}`]]: view,
        [style['component__without_effects']]: withoutEffects
    })

    const rotateStyle = Utils.CommonUtils.getRotateStyle(rotate)

    return (
        <div
            className={classNames}
            style={
                {
                    '--width': `${width}px`,
                    '--height': `${height}px`,
                    ...rotateStyle
                } as CSSProperties
            }
        >
            {children}
        </div>
    )
}

export default Icon