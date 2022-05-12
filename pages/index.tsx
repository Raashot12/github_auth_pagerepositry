import type { NextPage } from "next"
import React from "react"
import GithubGlobe from "../components/assests/globe.jpg"
import Image from "next/image"
const Home: NextPage = () => {
  const lazyRoot = React.useRef(null)
  const handleSubmit = (e:any) => {
    e.preventDefault()
  }
  return (
    <main className="hero-github">
      <section className="MuiContainer-maxWidthLg MuiContainer-root">
        <div className="landing-page">
          <div>
            <h1 className="hero-header">Where the world builds software</h1>

            <p>
              Millions of developers and companies build, ship, and maintain
              their software on GitHub—the largest and most advanced development
              platform in the world.
            </p>
            <form className="email-form" onSubmit={handleSubmit}>
              <div>
                <input placeholder="Email address"  type="text" />
                <button type="submit">Sign up for Github</button>
              </div>
            </form>
          </div>
          <div>
            <Image src={GithubGlobe} alt="Github Key"  className="globe-img"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
