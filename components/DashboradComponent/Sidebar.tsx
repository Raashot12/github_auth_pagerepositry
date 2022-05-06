import React, {useState} from "react"
import {useSelector} from "react-redux"
import {RootState} from "./store"

const Sidebar = () => {
  const sidebarResult: any = useSelector((state: RootState) => state.sidebar)
  const [follow, setFollow] = useState<boolean>(false)
  const handleFollow = () => {
    setFollow(!follow)
  }
  return (
    <div className="sidebar-parent">
      {sidebarResult.loading === "pending" ? (
        <div>
          <h4>Loading</h4>
        </div>
      ) : (
        <div>
          {sidebarResult.sidebarData && (
            <img
              src={sidebarResult.sidebarData?.avatar_url}
              alt=""
              width={260}
              height={260}
              style={{borderRadius: "50%", margin: "0 auto"}}
            />
          )}
          <h2 style={{color: "#181819", fontSize: "24px", marginBottom: "4px"}}>
            {sidebarResult.sidebarData.name}
          </h2>
          <p style={{color: "#87878c"}}>{sidebarResult.sidebarData.login}</p>
          <button className="btn btn-follow" onClick={handleFollow}>
            {follow ? "Following" : "Follow"}{" "}
          </button>
          <p className="bio">{sidebarResult.sidebarData.bio}</p>
          <div className="follows">
            <section className="followers">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                ></path>
              </svg>
              <p>{sidebarResult.sidebarData.followers} followers</p>
            </section>
            <section className="following">
              <div>.</div>
              <p>{sidebarResult.sidebarData.following} following</p>
            </section>
          </div>
          <div className="personal-container">
            <section className="personal-details">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                className="iconic"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>{sidebarResult.sidebarData.location}</p>
            </section>
            <section className="personal-details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 273.5 222.3"
                role="img"
                width={16}
                className="iconic"
                height={16}
                aria-labelledby="qoq7hhss5d9z7s1qcx57zxw1xk6pekp"
              >
                <title id="qoq7hhss5d9z7s1qcx57zxw1xk6pekp">Twitter</title>
                <path
                  d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                  fill="currentColor"
                ></path>
              </svg>
              <p>{sidebarResult.sidebarData.twitter_username}</p>
            </section>

            <section className="personal-details">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                className="iconic"
                width="16"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                ></path>
              </svg>

              <p>{sidebarResult.sidebarData.blog}</p>
            </section>
            <div className="divider sider-divider"></div>
            <section>
              <p className="organization">Organisations</p>
              <svg
                width="100"
                height="60"
                viewBox="0 0 117 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.13699 89.1V85.428H109.863V89.1H7.13699ZM81.198 83.583H69.2523L69.2055 36.378L54.9198 28.458L21.4695 39.492V83.592H7.13699V79.92H16.6959V37.647L54.9198 24.786L74.0259 35.811V79.911H81.198V83.583ZM28.5363 45.207L45.3609 39.492V46.845L28.6416 52.362L28.5363 45.207ZM45.3609 56.025V63.378L28.6416 67.05L28.5363 60.111L45.3609 56.025ZM28.6416 74.403L45.3609 70.731V79.92H28.6416V74.403ZM85.9716 10.089V83.592H93.132V16.596L85.9716 10.089ZM54.9198 33.975V83.583H62.0802V37.647L54.9198 33.975ZM109.863 83.583H97.9173V15.597L85.9716 4.572L40.5873 19.278V24.795L35.802 28.458V17.433L88.3584 0.900002L102.691 15.597V79.911H109.863V83.583Z"
                  fill="black"
                />
              </svg>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
