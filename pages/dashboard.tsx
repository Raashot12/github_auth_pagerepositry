import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Sidebar from '../components/DashboradComponent/Sidebar'
import {usersReceived, usersLoading, userLoggedout} from "../components/Slice/UserDetails"

const Dashboard = () => {

  
  const dispatch = useDispatch()
    async function repoDataURL() {
      //Get repo data about github user
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
  // async function fetchSidebar() {
  //   //Get repo data about github user
  //   await fetch("https://api.github.com/users/Raashot12/repos")
  //     .then(res => res.json())
  //     .then(
  //       result =>
  //       {
          
  //       },
  //       error => {
  //         console.log(error)
  //       }
  //     )
  // }
  useEffect(() =>
  {
    repoDataURL() 
  }, [])
  
  
  return (
    <Container>
      <Sidebar />
    </Container>
  )
}
export default Dashboard
