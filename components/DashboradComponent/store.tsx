import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit"
import SidebarDetails from "../SidebarDetails"
import UserDetails from "../UserDetails"

export const store = configureStore({
  reducer: {
    sidebar: SidebarDetails,
    details: UserDetails
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
