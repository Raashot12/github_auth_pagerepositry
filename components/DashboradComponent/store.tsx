import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit"
import userDetails from "../slice/UserDetails"
import sidebarDetails from "../slice/SidebarDetails"

export const store = configureStore({
  reducer: {
    details: userDetails,
    sidebar: sidebarDetails,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
