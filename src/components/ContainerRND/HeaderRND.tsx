import {FC} from 'react'
import cn from 'classnames'

import {CommonConst} from '../../const'
import {Button, Icon} from '../../views/common'
import {CloseIcon} from '../../images'
import {RNDUtils} from "../../utils";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {mainWidgetsStore} from "../../store/reducer/mainWidgets";

import {HeaderRNDType} from './types'
import style from './index.module.scss'

const HeaderRND: FC<HeaderRNDType> = ({label, name}) => {
    const btns = useAppSelector((state) => state.mainWidgets)
    const dispatch = useAppDispatch();
    const {handleShow} = mainWidgetsStore.actions;
    const handleHide = () => dispatch(handleShow(RNDUtils.handleShowModal(name, btns)))

    return (
        <div className={cn(CommonConst.CLASSNAME.headerRND, style.header)}>
            <span className={style.header__label}>{label}</span>
            <div>
                <Button view='light' iconView='light' transparentBtn height={20} onClick={handleHide}>
                    <Icon
                        height={20}
                        width={20}
                    >
                        <CloseIcon/>
                    </Icon>
                </Button>
            </div>
        </div>
    )
}

export default HeaderRND