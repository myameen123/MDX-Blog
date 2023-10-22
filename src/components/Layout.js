/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
