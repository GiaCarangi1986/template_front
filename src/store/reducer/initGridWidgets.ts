import {createSlice} from '@reduxjs/toolkit'

import {CommonConst} from '../../const'

const initialState = true

export const initGridWidgetsStore = createSlice({
    name: CommonConst.STORE_NAMES.INIT_GRID_WIDGETS,
    initialState,
    reducers: {
        setInitState: () => {
            return true;
        },
        resetInitState: () => {
            return false;
        }
    }
})

export default initGridWidgetsStore.reducer
