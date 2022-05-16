/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect } from "react"
import {useDispatch} from "react-redux"
import Sidebar from "../components/DashboradComponent/Sidebar"
import {
  usersReceived,
  usersLoading,
} from "../components/UserDetails"
import {
  sidebardataLoading,
  sidebardataReceived,
} from "../components/SidebarDetails"
import MainDashoard from "../components/DashboradComponent/MainDashoard"

const Dashboard = () => {

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
    Promise.all([repoDataURL(),fetchSidebar()])
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
