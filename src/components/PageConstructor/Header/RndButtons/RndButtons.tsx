import {Button, Icon} from '../../../../views/common'
import {BlockModuleConst} from '../../../../const'
import {DefaultStateIcon} from '../../../../images'
import {useAppDispatch, useAppSelector} from '../../../../store/hooks'
import {mainWidgetsStore} from '../../../../store/reducer/mainWidgets'

import style from './index.module.scss'

const RndButtons = () => {
    const btns = useAppSelector((state) => state.mainWidgets)
    const dispatch = useAppDispatch();
    const {handleShow} = mainWidgetsStore.actions;

    const handleClick = (name: string) => {
        dispatch(handleShow(btns.map(btn => {
            if (btn.name === name) {
                return {
                    ...btn,
                    show: !btn.show
                }
            }
            return btn
        })))
    }

    return (
        <div className={style.rnd_btns}>
            <div className={style.rnd_btns__block}>
                {Object.keys(BlockModuleConst.BLOCKS).map(el => {
                    const elem = BlockModuleConst.BLOCKS[el]
                    const itemBtn = btns.find(item => item.name === elem.name)
                    const view = itemBtn?.show ? 'light' : 'dark'
                    return <Button
                        key={elem.name}
                        view={view}
                        label={elem.btnLabel}
                        onClick={() => handleClick(elem.name)}
                    />
                })}
            </div>
            <Button view='light' iconView='light'>
                <Icon><DefaultStateIcon/></Icon>
            </Button>
        </div>
    )
}

export default RndButtons