import React from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.scss'
import TopBar from '../../Components/Topbar'
function HomePage() {
  return (
    <>
    <Sidebar/>
    <TopBar/>
    <div className='main'></div>
    </>
  )
}

export default HomePage