import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = (props) => {
  return (
    <div>
      PONER EL NAVBAR
      <Outlet />
    </div>
  )
}

export default SharedLayout
