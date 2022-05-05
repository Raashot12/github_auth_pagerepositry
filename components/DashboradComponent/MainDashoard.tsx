import React, {useRef, useState} from "react"
import Repository from "./Repository"
import Tagline from "./Tagline"
import {useSelector} from "react-redux"
import {RootState} from "./store"
import Link from "next/link"
import moment from "moment"

type UserProject = {
  id: number
  name: string
  url: string
  description: string
  language: string
  private: string
  updated_at: string
}
type BoardType = {
  users: {
    id?: number
    name?: string
    url?: string
    description?: string
    language?: string
    private?: string
    updated_at?: string
  }[]
  loading: string
}
const MainDashoard = () => {
  const boardResult = useSelector((state: RootState) => state.details)
  const {users, loading}: BoardType = boardResult
  const ref = useRef<HTMLDivElement>(null)
  const [search, setNewSearch] = useState<string>("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSearch(e.target.value)
  }

   const filtered = !search
     ? users
     : users.filter((person: any) =>
         person.name.toLowerCase().includes(search.toLowerCase())
       )
  const scrollNext = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollTop + 158
    
    }
  }
  const scrollPrev = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollTop - 158
    }
  }


  return (
    <div className="main-board">
      {boardResult.loading === "pending" ? (
        <div>
          <h4 style={{textAlign: "center"}}>Loading</h4>
        </div>
      ) : (
        <section>
          <Tagline />
          <Repository search={search} handleSearchChange={handleSearchChange} />
          <div ref={ref} className="scroll-card">
            {boardResult.users &&
              filtered.map((data) => {
                return (
                  <main className="repository-card-container" key={data?.id}>
                    <div>
                      <div className="name-public-container">
                        <Link
                          href={`https://github.com/Raashot12/${data?.name}`}
                        >
                          <a className="project-name">{data.name}</a>
                        </Link>
                      </div>
                      <p className="description">{data.description}</p>

                      <div className="language-card-container">
                        <div className="language-card-container">
                          <span
                            className={
                              data.language === "JavaScript"
                                ? "javascript"
                                : "other"
                            }
                          >
                            {" "}
                          </span>
                          <p className="programming-language">
                            {data.language}
                          </p>
                        </div>
                        <p className="data-updated">
                          {moment(data.updated_at).format("Do MMMM, YYYY")}
                        </p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <button className="starred-button">Starred</button>
                    </div>
                  </main>
                )
              })}
          </div>
          <div className="pagination-container">
            <button className="pagination-btn" onClick={scrollPrev}>
              Previous
            </button>
            <button className="pagination-btn" onClick={scrollNext}>
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default MainDashoard
