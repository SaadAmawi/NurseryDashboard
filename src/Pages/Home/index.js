import {useState,React} from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.scss'
import TopBar from '../../Components/Topbar'
import Loader from 'react-loaders'

function HomePage() {

  const [sidebarExtended, setSidebarExtended] = useState(false);

  const handleSidebarChange = (isExtended) => {
    setSidebarExtended(isExtended);
  };

  return (
    <>

      <Sidebar onSidebarChange={handleSidebarChange} />
      <TopBar extendSidebar={sidebarExtended} />
    
    <div className='main'>
      
    </div>
    <Loader type="ball-clip-rotate-multiple"/>

    </>
    
  )
}

export default HomePage