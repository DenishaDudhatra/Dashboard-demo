import React, { useState } from "react";
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Button,
   Checkbox,
   Typography
} from "@mui/material";
import logodashboard from "../../Assests/Image/logo-sm.png";
import logo from "../../Assests/Image/logo-light.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import MoreVert from "@mui/icons-material/MoreVertOutlined";
import Widgets from "@mui/icons-material/WidgetsOutlined";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import GridOnIcon from "@mui/icons-material/GridOn";
import MapIcon from "@mui/icons-material/Map";
import EditOffIcon from "@mui/icons-material/EditOff";
import Sidebarstyle from "./Sidebarstyle";
import { Close } from "@mui/icons-material";

const List = [
   {
      signin: "Sign In",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "Sign UP",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "Password Reset",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "PasswordCreate",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "Lock Screen",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "Logout",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "Sucsess Message",
      basic: "Basic",
      cover: "Cover"
   },
   {
      signin: "Two Step Verification",
      basic: "Basic",
      cover: "Cover"
   }
];
const Component = [
   {
      base: "Alerts"
   },
   {
      base: "Badges"
   },
   {
      base: "Buttons"
   },
   {
      base: "Colors"
   },
   {
      base: "Cards"
   },
   {
      base: "Crousal"
   },
   {
      base: "Dropdowns"
   },
   {
      base: "Grid"
   },
   {
      base: "Images"
   },
   {
      base: "Tabs"
   },
   {
      base: "Accordian & Collapse"
   },
   {
      base: "Modals"
   },
   {
      base: "Offcanvas"
   },
   {
      base: "Placeholders"
   },
   {
      base: "Progress"
   },
   {
      base: "Notifications"
   },
   {
      base: "Media Object"
   },
   {
      base: "Embed Video"
   },
   {
      base: "Typoghraphy"
   },
   {
      base: "Lists"
   },
   {
      base: "General"
   },
   {
      base: "Ribbons"
   },
   {
      base: "Utilities"
   }
];
const Data = [
   {
      alerts: "Sweet Alerts"
   },
   { alerts: "Nestable List" },
   { alerts: "Scrollbar" },
   { alerts: "Animation" },
   { alerts: "Tour" },
   { alerts: "Swiper Slider" },
   { alerts: "Rating" },
   { alerts: "Highlights" },
   { alerts: "Scrollypy" }
];

const Sidebar = ({ checked, setChecked }) => {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleChange = (event) => {
      setChecked(event.target.checked);
   };
   const ToggleSidebar = () => {
      checked === true ? setChecked(false) : setChecked(true);
   };

   return (
      <Sidebarstyle>
         <Box className={checked ? "sidebar openMenu" : "sidebar"}>
            <Box className="navsidebar">
               <Box className="velzone">
                  <img
                     src={logodashboard}
                     alt="logodashboard"
                     className="circlelogo"
                  />
                  <img src={logo} alt="logo" className="logo" />
                  <Button className="" onClick={() => setMenuOpen(!menuOpen)}>
                     <Checkbox onChange={handleChange} className="check" />
                  </Button>
               </Box>
            </Box>
            <Box className="menu">
               <MoreVert className="more" />
               <Typography variant="h4">MENU</Typography>
               <Box className="sidemenu">
                  <Box className="sidebaricon">
                     <AvTimerIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Dashboard</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Analytics
                              </li>
                              <li>
                                 <span>-</span> CRM
                              </li>
                              <li>
                                 <span>-</span> Ecommerece
                              </li>
                              <li>
                                 <span>-</span> Crypto
                              </li>
                              <li>
                                 <span>-</span> Project
                              </li>
                              <li>
                                 <span>-</span> NFT
                                 <span className="new">New</span>
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <AppsIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Apps</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Calender
                              </li>
                              <li>
                                 <span>-</span> Chat
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Email</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>Mailbox
                                          </li>
                                          <li>
                                             <span>o</span>Email Template
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Ecommerece</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>Products
                                          </li>
                                          <li>
                                             <span>o</span>Products Details
                                          </li>
                                          <li>
                                             <span>o</span> Create Products
                                          </li>
                                          <li>
                                             <span>o</span> order
                                          </li>
                                          <li>
                                             <span>o</span> order Details
                                          </li>
                                          <li>
                                             <span>o</span> Customers
                                          </li>
                                          <li>
                                             <span>o</span> Shopiing Cart
                                          </li>
                                          <li>
                                             <span>o</span> Checkout
                                          </li>
                                          <li>
                                             <span>o</span> Sellers
                                          </li>
                                          <li>
                                             <span>o</span> Sellers Details
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Project</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>List
                                          </li>
                                          <li>
                                             <span>o</span>Overview
                                          </li>
                                          <li>
                                             <span>o</span>Create Project
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Task</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>Kanban Board
                                          </li>
                                          <li>
                                             <span>o</span>List View
                                          </li>
                                          <li>
                                             <span>o</span>Task Detail
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>CRM</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>Contacts
                                          </li>
                                          <li>
                                             <span>o</span>Compnies
                                          </li>
                                          <li>
                                             <span>o</span>Deal
                                          </li>
                                          <li>
                                             <span>o</span>Leads
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Crypto</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>Transaction
                                          </li>
                                          <li>
                                             <span>o</span>But & Sell
                                          </li>
                                          <li>
                                             <span>o</span>Orders
                                          </li>
                                          <li>
                                             <span>o</span>My Wallet
                                          </li>
                                          <li>
                                             <span>o</span>ICO List
                                          </li>
                                          <li>
                                             <span>o</span>KYC Apllication
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Invoices</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>List View
                                          </li>
                                          <li>
                                             <span>o</span>Deatils
                                          </li>
                                          <li>
                                             <span>o</span>Create Invoice
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Supoort Tickets</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>List View
                                          </li>
                                          <li>
                                             <span>o</span>Ticket Deatils
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <span>-</span> NFT Marketplace
                                 <span className="new">New</span>
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <DashboardIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Layouts</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Horizantal
                              </li>
                              <li>
                                 <span>-</span> Deteched
                              </li>
                              <li>
                                 <span>-</span> Ecommerece
                              </li>
                              <li>
                                 <span>-</span> Two Column
                              </li>
                              <li>
                                 <span>-</span> Hovered
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
               </Box>
            </Box>
            <Box className="menu">
               <MoreVert className="more" />
               <Typography variant="h4">PAGES</Typography>
               <Box className="sidemenu">
                  <Box className="sidebaricon">
                     <AccountCircle />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Authentication</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           {List.map((data, key) => (
                              <ul>
                                 <li>
                                    <Accordion className="accordian">
                                       <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                          className="dashboardmenu"
                                       >
                                          <li>
                                             <span>-</span>
                                             <span> {data.signin}</span>
                                          </li>
                                       </AccordionSummary>
                                       <AccordionDetails>
                                          <ul className="anyltics">
                                             <li>
                                                <span>o</span>
                                                {data.basic}
                                             </li>
                                             <li>
                                                <span>o</span>
                                                {data.cover}
                                             </li>
                                          </ul>
                                       </AccordionDetails>
                                    </Accordion>
                                 </li>
                              </ul>
                           ))}
                           <ul>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Error</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>404 Basic
                                          </li>
                                          <li>
                                             <span>o</span>404 Cover
                                          </li>
                                          <li>
                                             <span>o</span>404 Alt
                                          </li>
                                          <li>
                                             <span>o</span>500
                                          </li>
                                          <li>
                                             <span>o</span>Offline Page
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <AutoStoriesIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Pages</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Starter
                              </li>
                              <li>
                                 <Accordion className="accordian">
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header"
                                       className="dashboardmenu"
                                    >
                                       <li>
                                          <span>-</span>
                                          <span>Profile</span>
                                       </li>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                       <ul className="anyltics">
                                          <li>
                                             <span>o</span>Simple Page
                                          </li>
                                          <li>
                                             <span>o</span>Settings
                                          </li>
                                       </ul>
                                    </AccordionDetails>
                                 </Accordion>
                              </li>
                              <li>
                                 <span>-</span> Team
                              </li>
                              <li>
                                 <span>-</span>Timeline
                              </li>
                              <li>
                                 <span>-</span>FAQs
                              </li>
                              <li>
                                 <span>-</span>Princing
                              </li>
                              <li>
                                 <span>-</span>Gallery
                              </li>
                              <li>
                                 <span>-</span>Maintennance
                              </li>
                              <li>
                                 <span>-</span>Coming Soon
                              </li>
                              <li>
                                 <span>-</span>Sitemap
                              </li>
                              <li>
                                 <span>-</span>Search Result
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <FlightTakeoffIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Landing</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>One Page
                              </li>
                              <li>
                                 <span>-</span> NFT Landing
                                 <span className="new">New</span>
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
               </Box>
            </Box>
            <Box className="menu">
               <MoreVert className="more" />
               <Typography variant="h4">COMPONENTS</Typography>
               <Box className="sidemenu">
                  <Box className="sidebaricon">
                     <EditOffIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Base UI</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           {Component.map((component, key) => (
                              <ul>
                                 <li>
                                    <span>-</span>
                                    {component.base}
                                 </li>
                              </ul>
                           ))}
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <EditOffIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Advance UI</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           {Data.map((data, key) => (
                              <ul>
                                 <li>
                                    <span>-</span>
                                    {data.alerts}
                                 </li>
                              </ul>
                           ))}
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <ul className="widgets">
                     <Widgets />
                     <span>Widgets</span>
                  </ul>
                  <Box className="sidebaricon">
                     <AvTimerIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Forms</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Basic Element
                              </li>
                              <li>
                                 <span>-</span> Form Select
                              </li>
                              <li>
                                 <span>-</span> Checkbox & Radio
                              </li>
                              <li>
                                 <span>-</span> Pickers
                              </li>
                              <li>
                                 <span>-</span> Input Masks
                              </li>
                              <li>
                                 <span>-</span>Advanced
                              </li>
                              <li>
                                 <span>-</span> Range Slider
                              </li>
                              <li>
                                 <span>-</span> Validation
                              </li>
                              <li>
                                 <span>-</span> Wizard
                              </li>
                              <li>
                                 <span>-</span> Editors
                              </li>
                              <li>
                                 <span>-</span> File Uploads
                              </li>
                              <li>
                                 <span>-</span> Form Layouts
                              </li>
                              <li>
                                 <span>-</span> Select2
                                 <span className="new new1">New</span>
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <GridOnIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Tables</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Basic Table
                              </li>
                              <li>
                                 <span>-</span>Grid Js
                              </li>
                              <li>
                                 <span>-</span>List Js
                              </li>
                              <li>
                                 <span>-</span> Datatables
                                 <span className="new">New</span>
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <DonutSmallIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Charts</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Apexcharts
                              </li>
                              <li>
                                 <span>-</span>Chartjs
                              </li>
                              <li>
                                 <span>-</span>Echarts
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <AvTimerIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Icons</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Remix
                              </li>
                              <li>
                                 <span>-</span>Boxicons
                              </li>
                              <li>
                                 <span>-</span>Material Design
                              </li>
                              <li>
                                 <span>-</span>Link Awesome
                              </li>
                              <li>
                                 <span>-</span>Feather
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <MapIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Maps</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Google
                              </li>
                              <li>
                                 <span>-</span>Vector
                              </li>
                              <li>
                                 <span>-</span>Leaflet
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <Box className="sidebaricon">
                     <AvTimerIcon />
                     <Accordion className="accordian space">
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           className="dashboardmenu"
                        >
                           <Typography variant="h6">
                              <span>Multi Level</span>
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ul>
                              <li>
                                 <span>-</span>Level 1.1
                              </li>
                              <li>
                                 <span>-</span>Level 1.2
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
               </Box>
            </Box>
         </Box>
         <Box
            className={`sidebar-overlay ${checked == true ? "active" : ""}`}
            onClick={ToggleSidebar}
         ></Box>
      </Sidebarstyle>
   );
};

export default Sidebar;
