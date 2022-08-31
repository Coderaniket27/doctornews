import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Private = ({isLogged}) => {
  return isLogged?<Outlet/> : <Navigate to="/"/>
}

export default Private