import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState } from 'react'

// import {
//     faLinkedin,
//     faGithub,
//   } from '@fortawesome/free-brands-svg-icons'
import {
    // faHome,
    faEnvelope,
    faUser,
    faBars,
    faClose,
    faGears,
    faChalkboardTeacher,
    faChartLine,
    faSchool
  } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const [button, showbutton]=useState(false);
    const [extendSidebar, setExtendSidebar] = useState(false)

  return (

<div className={extendSidebar?'extended-nav':'nav-bar'}>
<Link className="logo" to="/" onClick={()=>showbutton(false)}>

      </Link>

<nav >
  
    <NavLink exact="true" activeclassname="active" to="/" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faChartLine} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="classroom-link" to="/classrooms" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faChalkboardTeacher} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="students-link" to="/students" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faSchool} color="black" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faEnvelope} color="black" />
    </NavLink>
  
    
    </nav>
    {/* <FontAwesomeIcon 
          onClick={() => setExtendSidebar(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />




<FontAwesomeIcon 
          onClick={() => setExtendSidebar(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' /> */}
</div>
   
     
    
  )
}

export default Sidebar