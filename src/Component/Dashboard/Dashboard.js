import React, { useState } from "react";
import { Box, Button, Grid, Link, Typography, TextField } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CallMadeIcon from "@mui/icons-material/CallMade";
import MonetizationOn from "@mui/icons-material/MonetizationOnOutlined";
import SouthEast from "@mui/icons-material/SouthEastOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import FolderOpen from "@mui/icons-material/FolderOpenOutlined";
import LineChart from "./LineChart";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Dashboardsidebar from "../Dashboardsidebar/Dashboardsidebar";
import Dashboardstyle from "./Dashboardstyle";

const Dashboard = ({ menuChart, setMenuChart }) => {
   const [menuOpen, setMenu] = useState(false);
   const [value, setValue] = React.useState(null);

   const [values, setValues] = React.useState(new Date("2014-08-18T21:11:54"));

   const handleChange = (newValue) => {
      setValue(newValue);
   };

   return (
      <Dashboardstyle>
         <Box className="dashboard-title" id="data">
            <Box className="title">
               <Typography variant="h1">DASHBOARD</Typography>
            </Box>
            <Box className="title">
               <Typography variant="h3">Dashboard</Typography>
               <ChevronRightIcon className="right" />
               <Typography variant="h3">Dashboard</Typography>
            </Box>
         </Box>
         <Box className={menuOpen ? "dashboard newdashboard" : "dashboard"}>
            <Box className="bgcolor">
               <Box className="product">
                  <Box className="anna">
                     <Typography variant="h5">Good Morning, Anna!</Typography>
                     <Typography variant="h6">
                        Here's what's happening with your store today.
                     </Typography>
                  </Box>
                  <Box className="addproduct">
                     <Box className="calender">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                           <DesktopDatePicker
                              inputFormat="MM/dd/yyyy"
                              value={values}
                              onChange={handleChange}
                              renderInput={(params) => (
                                 <TextField {...params} />
                              )}
                           />
                        </LocalizationProvider>
                     </Box>

                     <Box className="chart1">
                        <Box className="add">
                           <Button>
                              <ControlPointIcon className="plus" />
                              Add Product
                           </Button>
                        </Box>
                        <Button onClick={() => setMenuChart(!menuChart)}>
                           <ShowChartIcon className="chart" />
                        </Button>
                     </Box>
                  </Box>
               </Box>
               <Box className="customer">
                  <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={3}>
                        <Box className="card">
                           <Box className="totalearning">
                              <Typography variant="h4">
                                 TOTAL EARNINGS
                              </Typography>
                              <Box className="percentage">
                                 <CallMadeIcon className="call" />
                                 <Typography>+16.24%</Typography>
                              </Box>
                           </Box>
                           <Box className="dolar">
                              <Typography variant="h6">$559.25k</Typography>
                           </Box>
                           <Box className="viewdata">
                              <Link>View net earnings</Link>
                              <MonetizationOn className="dolar" />
                           </Box>
                        </Box>
                     </Grid>
                     <Grid item xs={12} md={6} lg={3}>
                        <Box className="card">
                           <Box className="totalearning">
                              <Typography variant="h4">ORDERS</Typography>
                              <Box className="downpercentage">
                                 <SouthEast className="call" />
                                 <Typography>+ -3.57 %</Typography>
                              </Box>
                           </Box>
                           <Box className="dolar">
                              <Typography variant="h6">$559.25k</Typography>
                           </Box>
                           <Box className="viewdata">
                              <Link>View all orders</Link>
                              <ShoppingBagOutlinedIcon className="dolar1" />
                           </Box>
                        </Box>
                     </Grid>
                     <Grid item xs={12} md={6} lg={3}>
                        <Box className="card">
                           <Box className="totalearning">
                              <Typography variant="h4">CUSTOMERS</Typography>
                              <Box className="percentage">
                                 <CallMadeIcon className="call" />
                                 <Typography>+29.08 %</Typography>
                              </Box>
                           </Box>
                           <Box className="dolar">
                              <Typography variant="h6">183.35M</Typography>
                           </Box>
                           <Box className="viewdata">
                              <Link>See details</Link>
                              <AccountCircle className="dolar2" />
                           </Box>
                        </Box>
                     </Grid>
                     <Grid item xs={12} md={6} lg={3}>
                        <Box className="card">
                           <Box className="totalearning">
                              <Typography variant="h4">MY BALANCE</Typography>
                              <Box className="downpercentage1">
                                 <SouthEast className="call" />
                                 <Typography>+0.00 %</Typography>
                              </Box>
                           </Box>
                           <Box className="dolar">
                              <Typography variant="h6">$165.89k</Typography>
                           </Box>
                           <Box className="viewdata">
                              <Link>Withdraw money</Link>
                              <FolderOpen className="dolar1" />
                           </Box>
                        </Box>
                     </Grid>
                  </Grid>
               </Box>
               <Box className="chart">
                  <Grid container spacing={2}>
                     <Grid item xs={12} lg={8}>
                        <Box className="revenue">
                           <Box className="allrevenue">
                              <Typography variant="h4">Revenue</Typography>
                              <Box>
                                 <Link>ALL</Link>
                                 <Link>1M</Link>
                                 <Link>6M</Link>
                                 <Link>1Y</Link>
                              </Box>
                           </Box>
                           <Box className="refund">
                              <Grid container spacing={2}>
                                 <Grid item xs={6} md={3}>
                                    <Box className="order">
                                       <Typography variant="h1">
                                          7,585
                                       </Typography>
                                       <Typography variant="h2">
                                          Orders
                                       </Typography>
                                    </Box>
                                 </Grid>
                                 <Grid item xs={6} md={3}>
                                    <Box className="order">
                                       <Typography variant="h1">
                                          $22.89k
                                       </Typography>
                                       <Typography variant="h2">
                                          Earnings
                                       </Typography>
                                    </Box>
                                 </Grid>
                                 <Grid item xs={6} md={3}>
                                    <Box className="order">
                                       <Typography variant="h1">367</Typography>
                                       <Typography variant="h2">
                                          Refunds
                                       </Typography>
                                    </Box>
                                 </Grid>
                                 <Grid item xs={6} md={3}>
                                    <Box className="order border">
                                       <Typography variant="h1">
                                          18.92%
                                       </Typography>
                                       <Typography variant="h2">
                                          Conversation Ratio
                                       </Typography>
                                    </Box>
                                 </Grid>
                              </Grid>
                           </Box>
                           <Box className="columnchart">
                              <LineChart />
                           </Box>
                        </Box>
                     </Grid>
                     <Grid item xs={12} lg={4}>
                        <Box className="google_maps">
                           <Box className="search_location">
                              <Typography>Sales by Locations</Typography>
                              <Box>
                                 <Button>Export Report</Button>
                              </Box>
                           </Box>
                           <Box>
                              <iframe
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                                 width="600"
                                 height="450"
                                 frameborder="0"
                                 style={{ border: 0 }}
                                 allowfullscreen=""
                                 aria-hidden="false"
                                 tabindex="0"
                              ></iframe>
                           </Box>
                        </Box>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Box>

         <Box
            className={
               menuChart
                  ? "opendashSidebar opendashboardsidebar"
                  : "opendashSidebar"
            }
         >
            <Dashboardsidebar />
         </Box>
      </Dashboardstyle>
   );
};

export default Dashboard;
