import React from "react";
import {
   Box,
   Button,
   Grid,
   Menu,
   MenuItem,
   Paper,
   Table,
   TableBody,
   TableContainer,
   TableHead,
   TableRow,
   Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Piechart from "./Piechart";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import user from "../../Assests/Image/user.jpg";
import Visitstyle from "./Visitstyle";

function createData(
   orderid,
   customer,
   product,
   amount,
   vendor,
   status,
   rating,
   votes
) {
   return {
      orderid,
      user,
      customer,
      product,
      amount,
      vendor,
      status,
      rating,
      votes
   };
}

const rows = [
   createData(
      "#VZ2112",
      "Alex Smith",
      "Clothes",
      "$109.0",
      "Zoetic Fashion",
      "Paid",
      "5.0",
      "(61 votes)"
   ),
   createData(
      "#VZ2111",
      "Jansh Brown",
      "Kitchen Storage",
      "$149.00",
      "Micro Design",
      "Pending",
      "4.5",
      "(61 votes)"
   ),
   createData(
      "#VZ2109",
      "Ayaan Bowen",
      "Bike Accessories",
      "$215.00",
      "Nesta Technologies",
      "Paid",
      "4.9",
      "(89 votes)"
   ),
   createData(
      "#VZ2108",
      "Prezy Mark",
      "Furniture",
      "$199.00",
      "Syntyce Solutions",
      "Unpaid",
      "4.3",
      "(47 votes)"
   ),
   createData(
      "#VZ2107",
      "Vihan Hudda",
      "Bags and Wallets",
      "$330.00",
      "iTest Factory",
      "Paid",
      "4.7",
      "(161 votes)"
   )
];
const Visit = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.body}`]: {
         fontSize: 14
      }
   }));

   const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

   return (
      <Visitstyle>
         <Box className="Visitshop">
            <Grid container spacing={2}>
               <Grid item xs={12} lg={4}>
                  <Box className="source">
                     <Box className="store">
                        <Typography variant="h1">
                           Store Visits by Source
                        </Typography>
                        <Box className="reportmenu">
                           <Button
                              id="basic-button"
                              aria-controls={open ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              onClick={handleClick}
                           >
                              <Typography variant="h5">
                                 Report
                                 <KeyboardArrowDownIcon />
                              </Typography>
                           </Button>
                           <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              className="reportmenu"
                              onClose={handleClose}
                              MenuListProps={{
                                 "aria-labelledby": "basic-button"
                              }}
                           >
                              <MenuItem onClick={handleClose}>
                                 Download Report
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Export</MenuItem>
                              <MenuItem onClick={handleClose}>Import</MenuItem>
                           </Menu>
                        </Box>
                     </Box>
                     <Box className="piechart">
                        <Piechart />
                     </Box>
                  </Box>
               </Grid>
               <Grid item xs={12} lg={8}>
                  <Box className="Recentorder">
                     <Box className="confirmorder">
                        <Typography>Recent Orders</Typography>
                        <Button className="reportgenrate">
                           <InsertDriveFileOutlinedIcon />
                           <span>Generate Report</span>
                        </Button>
                     </Box>
                     <Box className="table">
                        <Box className="recent_order">
                           <TableContainer component={Paper}>
                              <Table
                                 sx={{ minWidth: 700 }}
                                 aria-label="customized table"
                                 className="maintable"
                              >
                                 <TableHead className="tablehead">
                                    <TableRow>
                                       <StyledTableCell>
                                          Order ID
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          Customer
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          Product
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          Amount
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          Vendor
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          Status
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          Rating
                                       </StyledTableCell>
                                    </TableRow>
                                 </TableHead>
                                 <TableBody className="tablebody">
                                    {rows.map((row) => (
                                       <StyledTableRow key={row.name}>
                                          <StyledTableCell
                                             component="th"
                                             scope="row"
                                             className="orderid"
                                          >
                                             {row.orderid}
                                          </StyledTableCell>
                                          <StyledTableCell
                                             align="left"
                                             className="userimage"
                                          >
                                             <img src={row.user} alt="user" />
                                             {row.customer}
                                          </StyledTableCell>
                                          <StyledTableCell align="left">
                                             {row.product}
                                          </StyledTableCell>
                                          <StyledTableCell
                                             align="left"
                                             className="totalamount"
                                          >
                                             {row.amount}
                                          </StyledTableCell>
                                          <StyledTableCell align="left">
                                             {row.vendor}
                                          </StyledTableCell>
                                          <StyledTableCell align="left">
                                             <span>{row.status}</span>
                                          </StyledTableCell>
                                          <StyledTableCell
                                             align="left"
                                             className="rating"
                                          >
                                             {row.rating}
                                             <span>{row.votes}</span>
                                          </StyledTableCell>
                                       </StyledTableRow>
                                    ))}
                                 </TableBody>
                              </Table>
                           </TableContainer>
                        </Box>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </Visitstyle>
   );
};

export default Visit;
