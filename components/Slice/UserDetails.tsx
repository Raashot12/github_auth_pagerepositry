import {createSlice, PayloadAction} from "@reduxjs/toolkit"
// import type { RootState } from "../../components/DashboradComponent/store"

export interface UserState {
  loading: "idle" | "pending" | "succeeded" | "failed"
  users: []
}

const initialState: UserState = {
  loading: "idle",
  users: [],
}

export const userDetails = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    usersLoading(state) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === "idle") {
        state.loading = "pending"
      }
    },
    usersReceived(state, action): void {
      if (state.loading === "pending") {
        state.loading = "idle"
        state.users = action.payload
      }
    },
    userLoggedout(state, action) {
      state.loading = "idle"
      state.users = []
    },
  },
})

// Action creators are generated for each case reducer function
export const {usersLoading, usersReceived, userLoggedout} = userDetails.actions

export default userDetails.reducer
