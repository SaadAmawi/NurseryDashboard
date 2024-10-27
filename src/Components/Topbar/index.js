import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileimage from '../../assets/images/ss.jpg'
import {
    faHome,
    faGears
  } from '@fortawesome/free-solid-svg-icons'
function TopBar() {
  return (
    <div className="top-bar">
        <h1 className='title'>Dashboard</h1>
        <ul className='elements'>
        <li><button className="button"><FontAwesomeIcon icon={faHome}  /></button></li>
        <li><button className="button"><FontAwesomeIcon icon={faGears}  /></button></li>
        <li><img src={profileimage}  alt="man" className='profile-image'/></li>
        </ul>
    </div>
  )
}

export default TopBar