import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {BlockModuleConst, CommonConst} from '../../const'

export type MainWidgetsType = {
    name: string;
    show: boolean;
}

const getInitState = () => {
    return Object.keys(BlockModuleConst.BLOCKS).map(el => {
        const elem = BlockModuleConst.BLOCKS[el]
        return {
            name: elem.name,
            show: true
        }
    })
}

const initialState: MainWidgetsType[] = getInitState()

export const mainWidgetsStore = createSlice({
    name: CommonConst.STORE_NAMES.MAIN_WIDGETS,
    initialState,
    reducers: {
        initDisplay: () => {
            return getInitState()
        },
        handleShow: (_state, action: PayloadAction<MainWidgetsType[]>) => {
            return [...action.payload]
        }
    }
})

export default mainWidgetsStore.reducer
