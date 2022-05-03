import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit"
import userDetails from "../../components/Slice/UserDetails"
import sidebarDetails from "../../components/Slice/SidebarDetails"

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
