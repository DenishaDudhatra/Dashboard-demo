import React, { useState } from "react";
import {
   Box,
   TextField,
   Badge,
   Avatar,
   Typography,
   Button,
   Menu,
   MenuItem,
   Divider,
   Tab,
   Checkbox
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import flag from "../../Assests/Image/flag.svg";
import WidgetsOutlined from "@mui/icons-material/WidgetsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CropFreeRoundedIcon from "@mui/icons-material/CropFreeRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Notifications from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avtar from "../../Assests/Image/avatar.jpg";
import spansish from "../../Assests/Image/spain.png";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import german from "../../Assests/Image/germany.png";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import itali from "../../Assests/Image/italy.png";
import Settings from "@mui/icons-material/SettingsOutlined";
import ExitToApp from "@mui/icons-material/ExitToAppOutlined";
import LockIcon from "@mui/icons-material/Lock";
import russia from "../../Assests/Image/russia.png";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWalletOutlined";
import china from "../../Assests/Image/china.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import bell from "../../Assests/Image/bell.svg";
import french from "../../Assests/Image/french.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import github from "../../Assests/Image/github.png";
import CloseIcon from "@mui/icons-material/Close";
import tshirtimage from "../../Assests/Image/t-shirt.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Language from "@mui/icons-material/LanguageOutlined";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentTurnedIn from "@mui/icons-material/AssignmentTurnedInOutlined";
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HeaderStyle from "./Headerstyle";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Flagtype = [
   {
      flag_image: flag,
      country: "English"
   },
   {
      flag_image: spansish,
      country: "Española"
   },
   {
      flag_image: german,
      country: "Deutsche"
   },
   {
      flag_image: itali,
      country: "Italiana"
   },
   {
      flag_image: russia,
      country: "русский"
   },
   {
      flag_image: china,
      country: "中国人"
   },
   {
      flag_image: french,
      country: "français"
   }
];
const Cartitem = [
   {
      tshirtimage: tshirtimage,
      brandedtshirt: "Branded T-Shirts",
      quantity: "Quantity :10 ",
      price: "$32",
      dolar: "$320"
   },
   {
      tshirtimage: tshirtimage,
      brandedtshirt: "Bentwood Chair",
      quantity: "Quantity :5 ",
      price: "$18",
      dolar: "$89"
   },
   {
      tshirtimage: tshirtimage,
      brandedtshirt: "Borosil Paper Cup",
      quantity: "Quantity :5 ",
      price: "$18",
      dolar: "$750"
   },
   {
      tshirtimage: tshirtimage,
      brandedtshirt: " Gray Styled T-Shirt",
      quantity: "Quantity :1 ",
      price: "$1250",
      dolar: "$1250"
   },
   {
      tshirtimage: tshirtimage,
      brandedtshirt: " Stillbird Helmet",
      quantity: "Quantity :2",
      price: "$495",
      dolar: "$990"
   }
];

const Header = ({ backopen, setBackopen }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const [anchorEl1, setAnchorEl1] = React.useState(null);
   const open1 = Boolean(anchorEl1);
   const handleClick1 = (event) => {
      setAnchorEl1(event.currentTarget);
   };
   const handleClose1 = () => {
      setAnchorEl1(null);
   };
   const [anchorEl2, setAnchorEl2] = React.useState(null);
   const open2 = Boolean(anchorEl2);
   const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
   };
   const handleClose2 = () => {
      setAnchorEl2(null);
   };
   const [anchorEl3, setAnchorEl3] = React.useState(null);
   const open3 = Boolean(anchorEl3);
   const handleClick3 = (event) => {
      setAnchorEl3(event.currentTarget);
   };
   const handleClose3 = () => {
      setAnchorEl3(null);
   };
   const [anchorEl4, setAnchorEl4] = React.useState(null);
   const open4 = Boolean(anchorEl4);
   const handleClick4 = (event) => {
      setAnchorEl4(event.currentTarget);
   };
   const handleClose4 = () => {
      setAnchorEl4(null);
   };
   const [value, setValue] = React.useState("1");

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <HeaderStyle>
         <ScrollToTop smooth component={<ArrowUpwardIcon />} />
         <Box className="dashboardheader">
            <Box className="mainheader">
               <Box className="navbar">
                  <Box className="searchpage">
                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Search..."
                        className="searchfill"
                     />
                     <Box className="searchicon">
                        <SearchIcon className="search" />
                     </Box>
                  </Box>
                  <Box>
                     <Button
                        className="back"
                        onClick={() => setBackopen(!backopen)}
                     >
                        <ArrowForwardIcon />
                     </Button>
                  </Box>
               </Box>
               <Box className="navbar2">
                  <Box className="flag">
                     <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                     >
                        <img src={flag} alt="flag" />
                     </Button>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           "aria-labelledby": "basic-button"
                        }}
                        className="flagmenu"
                     >
                        <MenuItem onClick={handleClose} className="menuitem">
                           <Box className="differentflag">
                              {Flagtype.map((flagtype, key) => (
                                 <Box className="flagstype">
                                    <img src={flagtype.flag_image} alt="flag" />
                                    <Typography variant="h4">
                                       {flagtype.country}
                                    </Typography>
                                 </Box>
                              ))}
                           </Box>
                        </MenuItem>
                     </Menu>
                  </Box>
                  <Box className="widgtesapp">
                     <Button
                        id="basic-button"
                        aria-controls={open1 ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open1 ? "true" : undefined}
                        onClick={handleClick1}
                     >
                        <WidgetsOutlined />
                     </Button>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl1}
                        open={open1}
                        onClose={handleClose1}
                        className="widgetsmenu"
                        MenuListProps={{
                           "aria-labelledby": "basic-button"
                        }}
                     >
                        <MenuItem
                           onClick={handleClose1}
                           className="widgetsdropdown"
                        >
                           <Box className="viewpage">
                              <Box>
                                 <Typography variant="h3">Web Apps</Typography>
                              </Box>
                              <Box className="viewbtn">
                                 <Button>
                                    View All Apps
                                    <ChevronRightIcon />
                                 </Button>
                              </Box>
                           </Box>
                        </MenuItem>
                        <MenuItem onClick={handleClose1}>
                           <Box className="github">
                              <Box className="subgithub">
                                 <img src={github} alt="github" />
                                 <span>GitHub</span>
                              </Box>
                              <Box className="subgithub">
                                 <img src={github} alt="github" />
                                 <span>Bitbucket</span>
                              </Box>
                              <Box className="subgithub">
                                 <img src={github} alt="github" />
                                 <span>Dribble</span>
                              </Box>
                           </Box>
                        </MenuItem>
                        <MenuItem onClick={handleClose1}>
                           <Box className="github">
                              <Box className="subgithub">
                                 <img src={github} alt="github" />
                                 <span>Dropbox</span>
                              </Box>

                              <Box className="subgithub">
                                 <img src={github} alt="github" />
                                 <span>Mail Chimp</span>
                              </Box>

                              <Box className="subgithub">
                                 <img src={github} alt="github" />
                                 <span>Slck</span>
                              </Box>
                           </Box>
                        </MenuItem>
                     </Menu>
                  </Box>
                  <Box className="addtocart">
                     <Button
                        id="basic-button"
                        aria-controls={open2 ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open2 ? "true" : undefined}
                        onClick={handleClick2}
                     >
                        <Badge badgeContent={5} color="info" className="badge">
                           <ShoppingBagOutlinedIcon color="action" />
                        </Badge>
                     </Button>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        className="cartmenu"
                        MenuListProps={{
                           "aria-labelledby": "basic-button"
                        }}
                     >
                        <MenuItem onClick={handleClose2}>
                           <Box className="mycard">
                              <Typography variant="h1">My Cart</Typography>
                              <Typography>5 items</Typography>
                           </Box>
                        </MenuItem>
                        <MenuItem onClick={handleClose2}>
                           {Cartitem.map((cart, key) => (
                              <Box className="cartitems">
                                 <Box className="productitem">
                                    <img src={cart.tshirtimage} alt="image" />
                                    <Box>
                                       <Typography>
                                          {cart.brandedtshirt}
                                       </Typography>
                                       <span>
                                          {cart.quantity}
                                          <CloseIcon />
                                          {cart.price}
                                       </span>
                                    </Box>
                                 </Box>
                                 <Box className="dolar">
                                    <Typography variant="h2">
                                       {cart.dolar}
                                    </Typography>
                                    <CloseIcon />
                                 </Box>
                              </Box>
                           ))}
                        </MenuItem>
                        <MenuItem onClick={handleClose2}>
                           <Box className="total">
                              <Box className="totalamount">
                                 <Typography variant="h2">Total:</Typography>
                                 <Typography>$3399.0</Typography>
                              </Box>
                              <Box>
                                 <Button>Checkout</Button>
                              </Box>
                           </Box>
                        </MenuItem>
                     </Menu>
                  </Box>
                  <Box className="crop">
                     <Button>
                        <CropFreeRoundedIcon />
                     </Button>
                  </Box>
                  <Box className="dark">
                     <Button>
                        <DarkModeOutlinedIcon />
                     </Button>
                  </Box>
                  <Box className="notification">
                     <div>
                        <Button
                           id="basic-button"
                           aria-controls={open4 ? "basic-menu" : undefined}
                           aria-haspopup="true"
                           aria-expanded={open4 ? "true" : undefined}
                           onClick={handleClick4}
                        >
                           <Box className="notification1">
                              <Button>
                                 <Badge
                                    badgeContent={3}
                                    color="warning"
                                    className="badge"
                                 >
                                    <Notifications color="action" />
                                 </Badge>
                              </Button>
                           </Box>
                        </Button>
                        <Menu
                           id="basic-menu"
                           anchorEl={anchorEl4}
                           open={open4}
                           onClose={handleClose4}
                           className="notifimenu"
                           MenuListProps={{
                              "aria-labelledby": "basic-button"
                           }}
                        >
                           <MenuItem>
                              <Box sx={{ width: "100%", typography: "body1" }}>
                                 <TabContext value={value}>
                                    <Box
                                       className="menuitem"
                                       sx={{
                                          borderBottom: 1,
                                          borderColor: "divider"
                                       }}
                                    >
                                       <Box className="newnotifi">
                                          <Typography variant="h2">
                                             Notification
                                          </Typography>
                                          <span>4 New</span>
                                       </Box>
                                       <TabList
                                          onChange={handleChange}
                                          aria-label="lab API tabs example"
                                       >
                                          <Tab label="ALL(4)" value="1" />
                                          <Tab label="Messages" value="2" />
                                          <Tab label="Alert" value="3" />
                                       </TabList>
                                    </Box>
                                    <TabPanel value="1" className="tab1">
                                       <Box
                                          className="all"
                                          onClick={handleClose4}
                                       >
                                          <Box className="new">
                                             <Box className="time">
                                                <AccessTimeIcon />
                                             </Box>
                                             <Box>
                                                <Typography variant="h3">
                                                   Your Elite author Graphic
                                                   <br></br>
                                                   Optimization&nbsp;
                                                   <span>reward</span> is
                                                   <br></br>
                                                   ready !
                                                </Typography>
                                                <Box className="second">
                                                   <AccessTimeIcon />
                                                   <span>JUST 30 SEC AGO</span>
                                                </Box>
                                             </Box>
                                             <Box>
                                                <Checkbox />
                                             </Box>
                                          </Box>
                                          <Box className="new">
                                             <Box className="time">
                                                <AccessTimeIcon />
                                             </Box>
                                             <Box>
                                                <Typography variant="h3">
                                                   Angela Bernier
                                                </Typography>
                                                <Typography>
                                                   Answered to your comment on
                                                   <br></br>the cash flow
                                                   forecast's graph.<br></br>
                                                   <NotificationsIcon />.
                                                </Typography>
                                                <Box className="second">
                                                   <AccessTimeIcon />
                                                   <span>48 MIN AGO</span>
                                                </Box>
                                             </Box>
                                             <Box>
                                                <Checkbox />
                                             </Box>
                                          </Box>
                                       </Box>
                                       <Box className="receivemessages">
                                          <Box className="message space">
                                             <SmsOutlinedIcon />
                                          </Box>
                                          <Box>
                                             <Typography variant="h6">
                                                You have received
                                                <span>20</span> new <br></br>
                                                message in the conversation
                                             </Typography>
                                             <Box className="min">
                                                <AccessTimeIcon />
                                                <span>48 MIN AGO</span>
                                             </Box>
                                          </Box>
                                          <Box>
                                             <Checkbox />
                                          </Box>
                                       </Box>
                                       <Box className="receivemessages spacetop">
                                          <Box className="message space">
                                             <SmsOutlinedIcon />
                                          </Box>
                                          <Box className="">
                                             <Typography variant="h6">
                                                Maureen Gibson
                                             </Typography>
                                             <Typography>
                                                We talked about a project on
                                                <br></br>
                                                linkedin.
                                             </Typography>
                                             <Box className="min">
                                                <AccessTimeIcon />
                                                <span>48 HRS AGO</span>
                                             </Box>
                                          </Box>
                                          <Box>
                                             <Checkbox />
                                          </Box>
                                       </Box>
                                       <Box className="viewnotification">
                                          <Button>
                                             View All Notification
                                             <EastOutlinedIcon />
                                          </Button>
                                       </Box>
                                    </TabPanel>
                                    <TabPanel value="2" className="tab1">
                                       <Box
                                          className="all"
                                          onClick={handleClose4}
                                       >
                                          <Box className="new">
                                             <Box className="time">
                                                <AccessTimeIcon />
                                             </Box>
                                             <Box>
                                                <Typography variant="h3">
                                                   Your Elite author Graphic
                                                   <br></br>
                                                   Optimization&nbsp;
                                                   <span>reward</span> is
                                                   <br></br>
                                                   ready !
                                                </Typography>
                                                <Box className="second">
                                                   <AccessTimeIcon />
                                                   <span>JUST 30 SEC AGO</span>
                                                </Box>
                                             </Box>
                                             <Box>
                                                <Checkbox />
                                             </Box>
                                          </Box>
                                          <Box className="new">
                                             <Box className="time">
                                                <AccessTimeIcon />
                                             </Box>
                                             <Box>
                                                <Typography variant="h3">
                                                   Angela Bernier
                                                </Typography>
                                                <Typography>
                                                   Answered to your comment on
                                                   <br></br>the cash flow
                                                   forecast's graph.<br></br>
                                                   <NotificationsIcon />.
                                                </Typography>
                                                <Box className="second">
                                                   <AccessTimeIcon />
                                                   <span>48 MIN AGO</span>
                                                </Box>
                                             </Box>
                                             <Box>
                                                <Checkbox />
                                             </Box>
                                          </Box>
                                       </Box>
                                       <Box className="receivemessages">
                                          <Box className="message space">
                                             <SmsOutlinedIcon />
                                          </Box>
                                          <Box>
                                             <Typography variant="h6">
                                                You have received
                                                <span>20</span> new <br></br>
                                                message in the conversation
                                             </Typography>
                                             <Box className="min">
                                                <AccessTimeIcon />
                                                <span>48 MIN AGO</span>
                                             </Box>
                                          </Box>
                                          <Box>
                                             <Checkbox />
                                          </Box>
                                       </Box>
                                       <Box className="receivemessages spacetop">
                                          <Box className="message space">
                                             <SmsOutlinedIcon />
                                          </Box>
                                          <Box className="">
                                             <Typography variant="h6">
                                                Maureen Gibson
                                             </Typography>
                                             <Typography>
                                                We talked about a project on
                                                <br></br>
                                                linkedin.
                                             </Typography>
                                             <Box className="min">
                                                <AccessTimeIcon />
                                                <span>48 HRS AGO</span>
                                             </Box>
                                          </Box>
                                          <Box>
                                             <Checkbox />
                                          </Box>
                                       </Box>
                                       <Box className="viewnotification">
                                          <Button>
                                             View All Notification
                                             <EastOutlinedIcon />
                                          </Button>
                                       </Box>
                                    </TabPanel>
                                    <TabPanel value="3" className="tab2">
                                       <Box className="bell">
                                          <Box>
                                             <img src={bell} alt="bellimage" />
                                          </Box>
                                          <Typography className="title">
                                             Hey! You have no any <br></br>
                                             notifications
                                          </Typography>
                                       </Box>
                                    </TabPanel>
                                 </TabContext>
                              </Box>
                           </MenuItem>
                        </Menu>
                     </div>
                  </Box>
                  <Box className="profilemenu">
                     <Button
                        id="basic-button"
                        aria-controls={open3 ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open3 ? "true" : undefined}
                        onClick={handleClick3}
                     >
                        <Box className="profile">
                           <Box className="avtar">
                              <Avatar alt="avtar" src={avtar} />
                           </Box>
                           <Box className="founder">
                              <Typography variant="h6">Anna Adame</Typography>
                              <Typography variant="h4">Founder</Typography>
                           </Box>
                        </Box>
                     </Button>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl3}
                        open={open3}
                        className="annaprofile"
                        onClose={handleClose3}
                        MenuListProps={{
                           "aria-labelledby": "basic-button"
                        }}
                     >
                        <MenuItem onClick={handleClose3}>
                           Welcome Anna!
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <AccountCircleIcon />
                           Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <MessageIcon />
                           Message
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <AssignmentTurnedIn />
                           Taskboard
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <Language />
                           Help
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose3}>
                           <AccountBalanceWallet />
                           Balance<Typography>:$5971.67</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <Box className="setting">
                              <Box className="new">
                                 <Settings />
                                 Setting
                              </Box>
                              <Box>
                                 <Typography variant="h6">New</Typography>
                              </Box>
                           </Box>
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <LockIcon />
                           Lock Screen
                        </MenuItem>
                        <MenuItem onClick={handleClose3}>
                           <ExitToApp />
                           Logout
                        </MenuItem>
                     </Menu>
                  </Box>
               </Box>
            </Box>
         </Box>
      </HeaderStyle>
   );
};

export default Header;
