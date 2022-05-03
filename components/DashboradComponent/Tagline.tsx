import React from 'react'
import Overview from '../assests/Icon/Overview'
import PackagesIcon from '../assests/Icon/PackagesIcon'
import ProjectIcon from '../assests/Icon/ProjectIcon'
import RepositoryIcon from '../assests/Icon/RepositoryIcon'
import StarIcon from '../assests/Icon/StarIcon'

const Tagline = () => {
  return (
    <div className="tagline-container">
      <div className="button-tagline">
        <Overview />
        <p>Overview</p>
      </div>
      <div className="button-tagline">
        <RepositoryIcon />
        <p>Repositories {12}</p>
      </div>
      <div className="button-tagline">
        <ProjectIcon />
        <p>Projects </p>
      </div>
      <div className="button-tagline">
        <PackagesIcon />
        <p>Packages </p>
      </div>
      <div className="button-tagline">
        <StarIcon />
        <p>Stars {11}</p>
      </div>
    </div>
  )
}

export default Tagline