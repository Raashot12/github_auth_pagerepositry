import React from "react"

interface IProps {
  search: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Repository = (props: IProps) => {
  return (
    <>
      <section className="search-btn">
        <div className="input-container">
          <input type="text" value={props.search} onChange={props.handleSearchChange} />
        </div>
        <div>
          <span>
            <button>Type</button>
          </span>
          <span>
            <button>Language</button>
          </span>
          <span>
            <button>Sort</button>
          </span>
        </div>
      </section>
    </>
  )
}
export default Repository