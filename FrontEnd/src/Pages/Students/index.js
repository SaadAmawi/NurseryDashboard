import {useState,React,useEffect} from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.scss'
import TopBar from '../../Components/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders';
import { Box, Button, IconButton, Typography, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import{faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { tokens } from "../../theme";
import { createStudent, getStudents } from '../../Services/studentServices'

function Students(extendSidebar) {
    const [sidebarExtended, setSidebarExtended] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [fullname, setFullname] = useState('');
    const [studentfullname, setStudentFullname] = useState('');
    const [birth_date, setBirthDate] = useState('');
    const [parent_email, setParentEmail] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [parent_phonenumber, setParentPhoneNumber] = useState('');
    const [studentData, setStudentData] = useState('');
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
    
    const handleSidebarChange = (isExtended) => {
      setSidebarExtended(isExtended);
    };
    
    const handleSubmit = async(e) => {
      e.preventDefault()
      const studentData = {
        fullname,
        studentfullname,
        birth_date,
        parent_email,
        gender,
        nationality,
        parent_phonenumber
      }
      try {
        const student = await createStudent(studentData);
        console.log('Student created:', student);
      } catch (error) {
        console.log('Error creating student:', error);
      }
    }

    useEffect(() => {
      const fetchStudentData = async () => {
        try {
          const response = await getStudents(); // Fetch data from your API
          console.log("Raw Response:", response); // Log the raw API response
    
          // Access the 'students' array from the response
          const studentsArray = response.students;
    
          // Format the studentsArray for DataGrid
          const formattedData = studentsArray.map((student) => ({
            id: student.id, // Use the actual student ID from the API
            studentfullname: student.fullname,
            birth_date: student.birth_date,
            parent_email: student.parent_email,
            gender: student.gender,
            nationality: student.nationality,
            parent_phonenumber: student.parent_phonenumber,
          }));
    
          console.log("Formatted Data:", formattedData); // Log the formatted data
          setStudentData(formattedData); // Update state with the formatted data
        } catch (error) {
          console.error("Error fetching student data:", error);
        }
      };
    
      fetchStudentData();
    }, [handleSubmit]);
    
    
    

      const columns = [
        {field: "id", headerName:"Student ID",width:100,headerAlign:'start',align:"center",cellClassName:"id-col",headerAlign:"center",headerClassName:"id-head"},
        {field:"studentfullname", headerName:"Student Name",width:300,cellClassName:"id-col",headerClassName:"id-head",headerAlign:"center",align:"center"},
        {field: "birth_date", headerName:"Student Birth Date",width:250,headerAlign:'start',align:"center",cellClassName:"id-col",headerAlign:"center",headerClassName:"id-head"},
        {field:"gender", headerName:"Student Gender",width:100,headerAlign:"center",align:"center",cellClassName:"id-col",headerClassName:"id-head"},
        {field:"nationality", headerName:"Student Nationality",width:200,headerAlign:"center",align:"center",cellClassName:"id-col",headerClassName:"id-head"},
        {field:"parent_email", headerName:"Parent Email",width:200,type:"number",align:"center",headerAlign:"center",cellClassName:"id-col",headerClassName:"id-head"},
        {field:"parent_phonenumber", headerName:"Parent Phone Number",flex:1 ,width:250,cellClassName:"id-col",headerClassName:"id-head", align:"center",headerAlign:"center"},
       
     
        
        
      
      ];
  return (
    <>
   <Sidebar onSidebarChange={handleSidebarChange} />
   <TopBar extendSidebar={sidebarExtended} />
   <div className={`patient-container${!sidebarExtended ? 'collapsed' : ''}`}>
    <button className='studentButton' onClick={() => setOpenDialog(true)}>Add Student &nbsp; &nbsp;<FontAwesomeIcon icon={faUserPlus}  /></button>
   <Box className="box" >

   <DataGrid
  className="grid"
  sx={{ border: "2px solid black", m: 3, borderRadius: "2px" }}
  rows={studentData || []}
  columns={columns}
  pageSizeOptions={[10]}
  checkboxSelection
  disableRowSelectionOnClick
  getRowClassName={(params) => {
    if (params.row.id % 2 === 0) {
      return "even-row"; // Light gray for even rows
    } else {
      return "odd-row"; // White for odd rows
    }
  }}
/>
                <Dialog open={openDialog} onClose={handleCloseDialog}  sx={{
                  '& .MuiDialog-paper': {
                    width: '100%', // Full width on small screens
                    maxWidth: '800px', // Max width on larger screens
                    [theme.breakpoints.up('sm')]: {
                      width: '90vw', // Relative width on screens that are small or larger
                    },
                  },
                }}>
                  <div className='Dialog'>
                  <h1>Student Information</h1>
                  <form onSubmit={handleSubmit}>
                    <input placeholder='Parent Name' type="text" onChange={(e) => setFullname(e.target.value)} required className='field'></input>
                    <input placeholder='Parent Email' type = "email" onChange={(e) => setParentEmail(e.target.value)} required className='field'></input>
                    <input placeholder='Parent Phone Number' type= "text"className='last' onChange={(e) => setParentPhoneNumber(e.target.value)} required ></input>
                    <input placeholder='Student Name' type="text" onChange={(e) => setStudentFullname(e.target.value)} required className='field'></input>
                    <input  type="date" onChange={(e) => setBirthDate(e.target.value)} required className='field'></input>
                    <input placeholder='Student Gender' type="text" onChange={(e) => setGender(e.target.value)} required className='field'></input>
                    <input placeholder='Student Nationality' type="text" onChange={(e) => setNationality(e.target.value)} required className='field'></input>
                    <button type='submit' className="submiz" onClick={()=> handleCloseDialog()}>submit</button>
                  </form>

                  </div>
          </Dialog>
          
        </Box>
      </div>
    </>
  )
}

export default Students