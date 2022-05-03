/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import Sidebar from "../components/DashboradComponent/Sidebar"
import {RootState} from "../components/DashboradComponent/store"
import {
  usersReceived,
  usersLoading,
  userLoggedout,
} from "../components/slice/UserDetails"
import {
  sidebardataLoading,
  sidebardataReceived,
  clearsidebardata,
} from "../components/slice/SidebarDetails"
import MainDashoard from "../components/DashboradComponent/MainDashoard"

const Dashboard = () => {
  const storeData = useSelector((state: RootState) => state.details)

  const dispatch = useDispatch()
  async function repoDataURL() {
    //Get repo data about github user repository
    dispatch(usersLoading())
    await fetch("https://api.github.com/users/Raashot12/repos")
      .then(res => res.json())
      .then(
        result => {
          dispatch(usersReceived(result))
        },
        error => {
          console.log(error)
        }
      )
  }
  async function fetchSidebar() {
    //Get repo data about github user
    dispatch(sidebardataLoading())
    await fetch("https://api.github.com/users/Raashot12")
      .then(res => res.json())
      .then(
        result => {
          dispatch(sidebardataReceived(result))
        },
        error => {
          console.log(error)
        }
      )
  }
  useEffect(() => {
    repoDataURL()
    fetchSidebar()
  }, [])

  return (
    <main className="MuiContainer-maxWidthLg MuiContainer-root">
      <div className="container-flex">
        <Sidebar />
        <MainDashoard />
      </div>
    </main>
  )
}
export default Dashboard
