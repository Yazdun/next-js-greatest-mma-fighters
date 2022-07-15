import React from 'react'
import { Topbar } from '@components/index'

export const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main>{children}</main>
    </>
  )
}
