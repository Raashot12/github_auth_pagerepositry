import {combineReducers} from "@reduxjs/toolkit"
import SidebarDetails from "./slice/SidebarDetails"
import userDetails  from "./slice/UserDetails"

const rootReducer = combineReducers({
  sidebar: SidebarDetails,
  details: userDetails
})


export default rootReducer
