import React from 'react'
import { signIn, useSession, signOut, getProviders } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
  const { data, status } = useSession()

  const handleSignIn = async () => {
    await signIn('github', {
      callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
    })
  }

  const handleLogout = async () => {
    await signOut({
      callbackUrl: `${process.env.NEXTAUTH_URL}`,
    })
  }

  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <svg
          width="50"
          height="50"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 0C16.11 0 0 16.11 0 36C0 51.93 10.305 65.385 24.615 70.155C26.415 70.47 27.09 69.39 27.09 68.445C27.09 67.59 27.045 64.755 27.045 61.74C18 63.405 15.66 59.535 14.94 57.51C14.535 56.475 12.78 53.28 11.25 52.425C9.99 51.75 8.19 50.085 11.205 50.04C14.04 49.995 16.065 52.65 16.74 53.73C19.98 59.175 25.155 57.645 27.225 56.7C27.54 54.36 28.485 52.785 29.52 51.885C21.51 50.985 13.14 47.88 13.14 34.11C13.14 30.195 14.535 26.955 16.83 24.435C16.47 23.535 15.21 19.845 17.19 14.895C17.19 14.895 20.205 13.95 27.09 18.585C29.97 17.775 33.03 17.37 36.09 17.37C39.15 17.37 42.21 17.775 45.09 18.585C51.975 13.905 54.99 14.895 54.99 14.895C56.97 19.845 55.71 23.535 55.35 24.435C57.645 26.955 59.04 30.15 59.04 34.11C59.04 47.925 50.625 50.985 42.615 51.885C43.92 53.01 45.045 55.17 45.045 58.545C45.045 63.36 45 67.23 45 68.445C45 69.39 45.675 70.515 47.475 70.155C54.6215 67.7422 60.8315 63.149 65.231 57.0221C69.6304 50.8951 71.9978 43.5429 72 36C72 16.11 55.89 0 36 0Z"
            fill="white"
          />
        </svg>
      </Link>
      <div>
        {status === "authenticated" ? (
          <>
            <div className='user-ui'>
              {data.user?.image && data.user.name ? (
                <img
                  src={data.user.image}
                  alt={data.user.name}
                  width={50}
                  height={50}
                  style={{borderRadius: "50%"}}
                />
              ) : null}

              <Link href="/dashboard" passHref>
                <button className="dashboard-btn">Dashboard</button>
              </Link>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <button onClick={handleSignIn} className="sign-btn">
            SignIn
          </button>
        )}
      </div>
    </nav>
  )
}

// export async function getServerSideProps() {
//   const providers = await getProviders()
//   return {
//     props: {
//       providers,
//     },
//   }
// }

export default Header;



