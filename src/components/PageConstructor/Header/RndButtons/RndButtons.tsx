import {Button, Icon} from '../../../../views/common'
import {BlockModuleConst} from '../../../../const'
import {DefaultStateIcon} from '../../../../images'
import {useAppDispatch, useAppSelector} from '../../../../store/hooks'
import {mainWidgetsStore} from '../../../../store/reducer/mainWidgets'
import {RNDUtils} from "../../../../utils";
import {initGridWidgetsStore} from "../../../../store/reducer/initGridWidgets";

import style from './index.module.scss'

const RndButtons = () => {
    const btns = useAppSelector((state) => state.mainWidgets)
    const dispatch = useAppDispatch();
    const {handleShow, initDisplay} = mainWidgetsStore.actions;
    const {setInitState} = initGridWidgetsStore.actions;

    const handleClickModule = (name: string) => {
        dispatch(handleShow(RNDUtils.handleShowModal(name, btns)))
    }
    const handleClickInitGrid = () => {
        dispatch(setInitState())
        dispatch(initDisplay())
    }

    return (
        <div className={style.rnd_btns}>
            <div className={style.rnd_btns__block}>
                {Object.keys(BlockModuleConst.BLOCKS).map(el => {
                    const elem = BlockModuleConst.BLOCKS[el]
                    const itemBtn = btns.find(item => item.name === elem.name)
                    return <Button
                        key={elem.name}
                        view={itemBtn?.show ? 'light' : 'lightReverse'}
                        label={elem.btnLabel}
                        onClick={() => handleClickModule(elem.name)}
                    />
                })}
            </div>
            <Button view='light' iconView='light' onClick={handleClickInitGrid}>
                <Icon><DefaultStateIcon/></Icon>
            </Button>
        </div>
    )
}

export default RndButtons