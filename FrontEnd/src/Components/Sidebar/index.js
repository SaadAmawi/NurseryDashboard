import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState } from 'react'
import placeholder from '../../assets/images/knowledgeroomlogo.png'
import TermlyReports from './termly.pdf'
import small from '../../assets/images/knowledgeroomlogo.png'
import 'animate.css';
import {
    faEnvelope,
    faUser,
    faBars,
    faClose,
    faGears,
    faChalkboardTeacher,
    faChartLine,
    faSchool,
    faChevronRight,
    faRightFromBracket,
    faFileLines,
    faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons'

function Sidebar({ onSidebarChange }) {
    const [button, showbutton] = useState(false);
    const [extendSidebar, setExtendSidebar] = useState(false);

    // Add this function to handle sidebar state changes
    const handleSidebarToggle = (isExtended) => {
        setExtendSidebar(isExtended);
        onSidebarChange(isExtended); // Notify parent component of change
    };

    return (
        <div className={extendSidebar ? 'extended-nav' : 'nav-bar'}>
            <div className="logo">
                <img src={placeholder} alt="Logo" className='memoreyezLogo' />
                <button className='buttons' onClick={() => handleSidebarToggle(true)}>
                    <FontAwesomeIcon icon={faBars} color="black" />
                </button>
            </div>

            <div className="break">
                    <h1>Nav</h1>
                <hr className="LineBreak"/>
                </div>

            <nav>
                <NavLink exact="true" activeclassname="active" className="poop" to="/" onClick={() => showbutton(false)}>
                    <FontAwesomeIcon icon={faChartLine}  />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="classroom-link" to="/classrooms" onClick={() => showbutton(false)}>
                    <FontAwesomeIcon icon={faChalkboardTeacher}  />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="students-link" to="/students" onClick={() => showbutton(false)}>
                    <FontAwesomeIcon icon={faSchool}  />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => showbutton(false)}>
                    <FontAwesomeIcon icon={faEnvelope}  />
                </NavLink>
                <div className="break">
                    <h1>Reports</h1>
                <hr className="LineBreak"/>
                </div>
                <NavLink exact="true" activeclassname="active" className="termlyReport-link" to={TermlyReports} target='_blank' onClick={()=>showbutton(false)}>
                <FontAwesomeIcon icon={faFileLines}  /> 
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="weeklyReport-link" to={TermlyReports} target='_blank' onClick={()=>showbutton(false)}>
                <FontAwesomeIcon icon={faCalendarWeek}  /> 
                </NavLink>
            </nav>
            <a href="/sign#">
            <button className="signOut">
            &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faRightFromBracket} />
            </button>
            </a>
            <ul className="collapesed">
                <li>
                    <div className="logoSmall">
                        <img src={small} alt="Logo" className='memoreyezLogo' />
                        <button className='buttons' onClick={() => handleSidebarToggle(false)}>
                        <FontAwesomeIcon icon={faChevronRight} color="black" />
                        </button>
                    </div>
                </li>
            </ul>
  
        </div>
        
    )
}

export default Sidebar