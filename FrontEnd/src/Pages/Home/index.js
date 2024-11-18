import {useState,React} from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.scss'
import TopBar from '../../Components/Topbar'
import Loader from 'react-loaders'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import QuizIcon from '@mui/icons-material/Quiz';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CakeIcon from '@mui/icons-material/Cake';
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../Components/Header";
import StatBox from "../../Components/StatBox";
import ProgressCircle from "../../Components/ProgressCircle";
import {BarChart} from "@mui/x-charts"
import { Box, Button, IconButton, Typography, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
import LineChart from '../../Components/lineChart'
import { tokens } from "../../theme";


function HomePage({extendSidebar}) {

  const [sidebarExtended, setSidebarExtended] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const handleSidebarChange = (isExtended) => {
    setSidebarExtended(isExtended);
  };

  return (
    <>

      <Sidebar onSidebarChange={handleSidebarChange} />
      <TopBar extendSidebar={sidebarExtended} />
    
      <div className={`dashboard ${!sidebarExtended ? 'collapsed' : ''}`}>
    <Box ml={`${!sidebarExtended ? '280px' : '160px'}`} mr="30px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">

        
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.white[100]}
          borderRadius="20px"
          boxShadow="0px 0px 12px rgba(0, 0, 0, 0.5)"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Percent Users with Completed Test
              </Typography>
              
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="300px" m="-30px 0 0 0" display="flex" justifyContent="center" alignItems="center" flexDirection="column"  >
            {/* <LineChart isDashboard={true} /> */}
            <ProgressCircle size="140"  
            ></ProgressCircle>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[200]}
              sx={{ mt: "15px" }}
            >
              of patients have completed their intial assessment
            </Typography>
            <Typography>Data Collected From Patient Application</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.white[500]}
          borderRadius="20px"
          boxShadow="0px 0px 12px rgba(0, 0, 0, 0.5)"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Percent Users with Completed Test
              </Typography>
              
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[200] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="300px" m="-30px 0 0 0" display="flex" justifyContent="center" alignItems="center" flexDirection="column"  >
            {/* <LineChart isDashboard={true} /> */}
            <ProgressCircle size="140"  
            ></ProgressCircle>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[200]}
              sx={{ mt: "15px" }}
            >
              of patients have completed their intial assessment
            </Typography>
            <Typography>Data Collected From Patient Application</Typography>
          </Box>
        </Box>
       

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.white[300]}
          overflow="auto"
          borderRadius="20px"
          boxShadow="0px 0px 12px rgba(0, 0, 0, 0.5)"
 >
<Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.redAccent[400]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Tests
            </Typography>
          </Box>
          {/* {patientData.map((patients, i) => ( */}
            <Box
              // key={`${patients.name}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.greenAccent[200]}`}
              p="15px"
            >
              <Box>
                <div className="first">
                <img  width={20} height={20} className="userPic"/>
                <div className="second">
                <Typography
                  color={colors.greenAccent[200]}
                  variant="h5"
                  fontWeight="600"
                >
                  
                </Typography>
                <Typography color={colors.grey[100]}>
                  
                </Typography>
                </div>
                </div>
              </Box>
              <Box color={colors.grey[100]} width={200} textAlign={"left"} ></Box>
              <Box
                backgroundColor={colors.greenAccent[200]}
                p="5px 10px"
                borderRadius="4px"
              >
                
              </Box>
            </Box>
          
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.white[300]}
          borderRadius="20px"
          boxShadow="0px 0px 12px rgba(0, 0, 0, 0.5)"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Percent Users with Completed Test
              </Typography>
              
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[200]}}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="300px" m="-30px 0 0 0" display="flex" justifyContent="center" alignItems="center" flexDirection="column"  >
            {/* <LineChart isDashboard={true} /> */}
            <ProgressCircle size="140"  
            ></ProgressCircle>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[200]}
              sx={{ mt: "15px" }}
            >
              of patients have completed their intial assessment
            </Typography>
            <Typography>Data Collected From Patient Application</Typography>
          </Box>
        </Box>
     

       
          

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.white[300]}
          p="1px"
          borderRadius="20px"
          boxShadow="0px 0px 12px rgba(0, 0, 0, 0.5)"

        > 
         
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            
          >
            <BarChart
      xAxis={[{ label: "Score" }]}
      margin={{ left: 150 }}
      yAxis={[
        {
          scaleType: 'band',
          data: [
            'Attention and orientation',
            'Delayed recall',
            'Executive function',
            'Memory',
            'Numeric calculation',
            'Registration/Digit Span',
            'Visual spatial',
            'Visual spatial/Exec Func',
          ],
        },
      ]}
      layout="horizontal"
      series={[
        {
          data: [2, 4, 6, 3, 5, 7, 2, 4], // Placeholder data
          label: "Average Patient Score",
          color: "#1e5245",
        },
        {
          data: [8, 8, 8, 8, 8, 8, 8, 8], // Placeholder full score
          label: "Full Score",
          color: "#db4f4a",
        },
      ]}
      width={700}
      height={300}
    />
            
         
          </Box>
        </Box>
     
        
      </Box>
    </Box>
    </div>
    <Loader type="ball-clip-rotate-multiple"/>

    </>
    
  )
}

export default HomePage