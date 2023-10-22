import React from 'react'
import { IoMdClose } from 'react-icons/io'

import Links from '../constants/links'
import Categories from '../components/Categories'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${showSidebar ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </aside>
  )
}

export default Sidebar
