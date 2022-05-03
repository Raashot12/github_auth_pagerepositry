import React from 'react'
import Repository from './Repository'
import Tagline from './Tagline'

const MainDashoard = () => {
  return (
    <div className='main-board'>
      <Tagline />
      <Repository />
     <div className='divider'></div>
    </div>
  )
}

export default MainDashoard