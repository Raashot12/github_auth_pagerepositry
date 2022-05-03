import React from "react"
import Repository from "./Repository"
import Tagline from "./Tagline"
import {useSelector} from "react-redux"
import {RootState} from "./store"
import Link from "next/link"

type UserProject = {
  id: number,
  name: string,
  url: string,
  description: string
  language:string
}
const MainDashoard = () => {
  const boardResult = useSelector((state: RootState) => state.details)
  return (
    <div className="main-board">
      {boardResult.loading === "pending" ? (
        <div>
          <h4 style={{textAlign: "center"}}>Loading</h4>
        </div>
      ) : (
        <section>
          <Tagline />
          <Repository />
          <div>
            {boardResult.users &&
              boardResult.users.map((data:UserProject, id) => {
                return (
                  <main className="repository-card-container" key={data?.id}>
                    <div>
                      <Link href={`https://github.com/Raashot12/${data.name}`}>
                        <a className="project-name">{data.name}</a>
                      </Link>
                      <p className="description">{data.description}</p>
                    </div>
                    <div>
                      <span></span>
                      <p className="programming-language">{data.language}</p>
                    </div>
                  </main>
                )
              })}
          </div>
        </section>
      )}
    </div>
  )
}

export default MainDashoard
