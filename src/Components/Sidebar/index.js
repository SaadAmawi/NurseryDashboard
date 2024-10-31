import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState } from 'react'
import placeholder from '../../assets/images/placeholder.png'
import small from '../../assets/images/smallPlace.png'
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
    faSchool,
    faChevronRight,
    faRightFromBracket
    
  } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const [button, showbutton]=useState(false);
    const [extendSidebar, setExtendSidebar] = useState(false)

  return (

<div className={extendSidebar?'extended-nav':'nav-bar'}>
<div className="logo" >
  <img src={placeholder} alt="Logo" className='memoreyezLogo' />
  <button className='buttons' onClick={() => setExtendSidebar(true)}>
  <FontAwesomeIcon  icon={faBars} color="black" />
  </button>

      </div>

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
    <button className="signOut"> <FontAwesomeIcon icon={faRightFromBracket}  /></button>
    <ul className="collapesed">
    <li>
    <div className="logoSmall" >
  <img src={small} alt="Logo" className='memoreyezLogo' />
  <button className='buttons' onClick={() => setExtendSidebar(false)}>
  <FontAwesomeIcon  icon={faChevronRight} color="black" />
  </button>

      </div>
       
    </li>
</ul>
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