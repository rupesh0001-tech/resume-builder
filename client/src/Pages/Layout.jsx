import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Outlet />
      <h1> Layout page </h1>
    </div>
  )
}

export default Layout