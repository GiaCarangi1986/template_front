import { combineReducers, configureStore } from '@reduxjs/toolkit'

import mainWidgetsReducer from './reducer/mainWidgets'

const rootReducer = combineReducers({
  mainWidgets: mainWidgetsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type { RootState, AppStore, AppDispatch }
