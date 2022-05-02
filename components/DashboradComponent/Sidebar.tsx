import React from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'
const Sidebar = () => {
  const { data, status } = useSession()
  return (
    <div className="sidebar-parent">
      {status === "authenticated" ? (
        <>
          <div>
            {data.user?.image && data.user.name ? (
              <div>
                <img
                  src={data.user.image}
                  alt={data.user.name}
                  width={260}
                  height={260}
                  style={{borderRadius: "50%", margin: "0 auto"}}
                />
                <div>
                  <h1 style={{color: "#181819", fontSize: "24px", marginBottom:"4px"}}>
                    {data.user.name}{" "}
                  </h1>
                  <p style={{ color: "#87878c", }}>{data.user.email }</p>
                </div>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

export default Sidebar