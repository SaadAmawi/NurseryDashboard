import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState } from 'react'

import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faEnvelope,
    faUser,
    faBars,
    faClose,
    faGears,
    faUpRightFromSquare,
    faChalkboardTeacher,
    faChartLine,
    faSchool
  } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const [button, showbutton]=useState(false);

  return (


<div className='nav-bar'>
<Link className="logo" to="/" onClick={()=>showbutton(false)}>

      </Link>

<nav className={button ? 'mobile-button':''}>
  
    <NavLink exact="true" activeclassname="active" to="/" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faChartLine} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="classroom-link" to="/about" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faChalkboardTeacher} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="students-link" to="/skills" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faSchool} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faEnvelope} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="account-link" to="/contact" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faUser} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="settings-link" to="/contact" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faGears} color="black" />
    </NavLink>
    
    <FontAwesomeIcon 
          onClick={() => showbutton(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
</nav>




<FontAwesomeIcon 
          onClick={() => showbutton(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
</div>
   
     
    
  )
}

export default Sidebar