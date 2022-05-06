import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "./DashboradComponent/store"

export interface SibebarState {
  loading: "idle" | "pending" | "succeeded" | "failed"
  sidebarData: []
}

const initialState: SibebarState = {
  loading: "idle",
  sidebarData: [],
}

export const sidebarDetails = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    sidebardataLoading(state) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === "idle") {
        state.loading = "pending"
      }
    },
    sidebardataReceived(state, action): void {
      if (state.loading === "pending") {
        state.loading = "idle"
        state.sidebarData = action.payload
      }
    },
    clearsidebardata(state, action) {
      state.loading = "idle"
      state.sidebarData =[]
    },
  },
})
export const selectCount = (state: RootState) => state

// Action creators are generated for each case reducer function
export const {sidebardataLoading, sidebardataReceived, clearsidebardata} =
  sidebarDetails.actions

export default sidebarDetails.reducer
