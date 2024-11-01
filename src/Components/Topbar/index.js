import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'animate.css';

import {
    faHome,
    faGears,
    faGear,
    faBell,
    faCircleUser
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

// Add extendSidebar as a prop
function TopBar({ extendSidebar }) {
  return (
    // Add dynamic className based on sidebar state
    <div className={`top-bar ${!extendSidebar ? 'collapsed' : ''}`}>
      <div className='leftSide'>
        <h3 className='topTitle'>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon color='grey' icon={faHome} />
          </NavLink> / Dashboard
        </h3>
        <h1 className='title'>Dashboard</h1>
      </div>
      <ul className='elements'>
        <li><input type='text' className='input' placeholder='Search here'></input></li>
        <li><button className="button"><FontAwesomeIcon icon={faCircleUser} /></button></li>
        <li><button className="button"><FontAwesomeIcon icon={faGear} /></button></li>
        <li><button className="button"><FontAwesomeIcon icon={faBell} /></button></li>
      </ul>
    </div>
  )
}

export default TopBar