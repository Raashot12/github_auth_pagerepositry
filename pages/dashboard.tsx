/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import Sidebar from "../components/DashboradComponent/Sidebar"
import {RootState} from "../components/DashboradComponent/store"
import {
  usersReceived,
  usersLoading,
  userLoggedout,
} from "../components/UserDetails"
import {
  sidebardataLoading,
  sidebardataReceived,
  clearsidebardata,
} from "../components/SidebarDetails"
import MainDashoard from "../components/DashboradComponent/MainDashoard"

const Dashboard = ({data}: any) => {
  const storeData = useSelector((state: RootState) => state.details)
console.log(data)
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

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/Raashot12`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Dashboard
