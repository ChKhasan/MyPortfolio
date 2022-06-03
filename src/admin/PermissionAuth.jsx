import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../hooks/useAuth'

const PermissionAuth = () => {
    const auth = useAuth()
  return auth ? <Outlet/>:<Navigate to="/registr" />
}

export default PermissionAuth