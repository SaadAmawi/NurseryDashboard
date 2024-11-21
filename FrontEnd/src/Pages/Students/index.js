import {useState,React} from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.scss'
import TopBar from '../../Components/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Loader from 'react-loaders';
import { Box, Button, IconButton, Typography, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import{faUserPlus} from '@fortawesome/free-solid-svg-icons'
import './index.scss';


function Students(extendSidebar) {
    const [sidebarExtended, setSidebarExtended] = useState(false);
    const handleSidebarChange = (isExtended) => {
        setSidebarExtended(isExtended);
      };
    

      const columns = [
        {field: "id", headerName:"Student ID",width:100,headerAlign:'start',align:"center",cellClassName:"id-col",headerAlign:"center",headerClassName:"id-head"},
        {field:"name", headerName:"Student Name",flex:1 ,width:250,cellClassName:"id-col",headerClassName:"id-head",headerAlign:"center",align:"left",
        renderCell: (params) => (
          <>
          <img src={params.row.imageLink} alt="Patient" style={{ width: '40px', height: '40px', borderRadius:"50%",marginRight:"30px" }} />
          <Typography>{params.row.name}</Typography></>)},
        {field: "email", headerName:"Student Email",width:250,headerAlign:'start',align:"center",cellClassName:"id-col",headerAlign:"center",headerClassName:"id-head"},
        {field:"age", headerName:"Student DOB",width:100,type:"number",align:"center",headerAlign:"center",cellClassName:"id-col",headerClassName:"id-head"},
        {field:"phone", headerName:"Parent Phone Number",width:200,headerAlign:"center",align:"center",cellClassName:"id-col",headerClassName:"id-head"},
        {field:"education", headerName:"Parent Name",width:150,headerAlign:"center",align:"center",cellClassName:"id-col",headerClassName:"id-head"},
        {field:"Test", headerName:"Parent Email",flex:1 ,width:250,cellClassName:"id-col",headerClassName:"id-head", align:"center",headerAlign:"center"},
       
     
        
        
      
      ];
  return (
    <>
   <Sidebar onSidebarChange={handleSidebarChange} />
   <TopBar extendSidebar={sidebarExtended} />
   <div className={`patient-container${!sidebarExtended ? 'collapsed' : ''}`}>
    <button className='studentButton'>Add Student &nbsp; &nbsp;<FontAwesomeIcon icon={faUserPlus}  /></button>
   <Box className="box" >
           
            <DataGrid
            className='grid'
            sx={{ border:"2px solid black", m: 3, borderRadius:"2px",}}
            
            columns={columns}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            // onRowClick={handleRowClick}
            getRowClassName={(params) => {
              console.log(params.row.id);
              if (params.row.id % 2 === 0) {
                return "even-row" ; // Light gray for even rows
              } else {
                return "odd-row" ; // White for odd rows
              }
            }}
          />
          
        </Box>
      </div>
    </>
  )
}

export default Students