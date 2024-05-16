import React from "react";
import {
   Box,
   Button,
   Grid,
   Menu,
   MenuItem,
   Pagination,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Typography
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import product_img from "../../Assests/Image/t-shirt.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import mode from "../../Assests/Image/mode.png";
import Viewstyle from "./Viewstyle";
import Sidebar from "../Sidebar/Sidebar";

function Productdata(
   selling_title,
   selling_date,
   categories,
   stockprice,
   stock,
   amount,
   amout
) {
   return {
      mode,
      selling_title,
      selling_date,
      categories,
      stockprice,
      stock,
      amount,
      amout
   };
}
const Product = [
   Productdata(
      "iTest Factory",
      "Oliver Tyler",
      "Bags and Wallets",
      "8547",
      "Stock",
      "$541200",
      "32%"
   ),
   Productdata(
      "Digitech Galaxy",
      "John Roberts",
      "Watches",
      "895",
      "Stock",
      "$75030",
      "79%"
   ),
   Productdata(
      "Nesta Technologies",
      "Harley Fuller",
      "Bike Accessories	",
      "3470",
      "Stock",
      "$45600",
      "90%"
   ),
   Productdata(
      "Zoetic Fashion",
      "James Bowen",
      "Clothes",
      "5488",
      "Stock",
      "$29456",
      "40%"
   ),
   Productdata(
      "Meta4Systems",
      "Zoe Dennis",
      "Furniture",
      "4100",
      "Stock",
      "$11260",
      "57%"
   )
];
function createData(
   product_title,
   product_date,
   product_price,
   price,
   product_order,
   orders,
   product_stock,
   stock,
   product_amount,
   amout
) {
   return {
      product_img,
      product_title,
      product_date,
      product_price,
      price,
      product_order,
      orders,
      product_stock,
      stock,
      product_amount,
      amout
   };
}

const rows = [
   createData(
      "Branded T-Shirts",
      "24 Apr 2021",
      "$29.00",
      "Price",
      "Orders",
      62,
      510,
      "Stock",
      "$1,798",
      "Amount"
   ),
   createData(
      "Bentwood Chair",
      "19 Mar 2021",
      "$85.20",
      "Price",
      "Orders",
      35,
      "out of stock",
      "Stock",
      "$2982",
      "Amount"
   ),
   createData(
      "Borosil Paper Cup",
      "01 Mar 2021",
      "$14.00",
      "Price",
      "Orders",
      80,
      749,
      "Stock",
      "$1120",
      "Amount"
   ),
   createData(
      "One Seater Sofa",
      "11 Feb 2021",
      "$127.50",
      "Price",
      "Orders",
      56,
      "Out of stock",
      "Stock",
      "$7140",
      "Amount"
   ),
   createData(
      "Stillbird Helmet",
      "17 Jan 2021",
      "$54",
      "Price",
      "Orders",
      74,
      805,
      "Stock",
      "$3996",
      "Amount"
   )
];

const View = () => {
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
      setAnchorEl(null);
   };
   return (
      <Viewstyle>
         <Box className="purchase">
            <Grid container spacing={2}>
               <Grid item xs={12} lg={6}>
                  <Box className="sellingprod">
                     <Box className="sortby">
                        <Box>
                           <Typography variant="h1">
                              Best Selling Products
                           </Typography>
                        </Box>
                        <Box className="selling">
                           <Button
                              id="basic-button"
                              aria-controls={open ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              onClick={handleClick}
                           >
                              <Typography variant="h5">
                                 SORT BY:
                                 <span>
                                    today
                                    <KeyboardArrowDownIcon />
                                 </span>
                              </Typography>
                           </Button>
                           <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              className="submenu"
                              onClose={handleClose}
                              MenuListProps={{
                                 "aria-labelledby": "basic-button"
                              }}
                           >
                              <MenuItem onClick={handleClose}>Today</MenuItem>
                              <MenuItem onClick={handleClose}>
                                 Yesterday
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                 Last 7 days
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                 Last 30 days
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                 This Month
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                 Last Month
                              </MenuItem>
                           </Menu>
                        </Box>
                     </Box>
                     <Box className="productdetail">
                        <TableContainer component={Paper}>
                           <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                           >
                              {/* <TableHead>
                                 <TableRow>
                                    <TableCell>
                                       Dessert (100g serving)
                                    </TableCell>
                                    <TableCell align="right">
                                       Calories
                                    </TableCell>
                                    <TableCell align="right">
                                       Fat&nbsp;(g)
                                    </TableCell>
                                    <TableCell align="right">
                                       Carbs&nbsp;(g)
                                    </TableCell>
                                    <TableCell align="right">
                                       Protein&nbsp;(g)
                                    </TableCell>
                                 </TableRow>
                              </TableHead> */}
                              <TableBody>
                                 {rows.map((row) => (
                                    <TableRow
                                       key={row.name}
                                       sx={{
                                          "&:last-child td, &:last-child th": {
                                             border: 0
                                          }
                                       }}
                                    >
                                       <TableCell component="th" scope="row">
                                          <Box className="product">
                                             <img
                                                src={row.product_img}
                                                alt="tshirt"
                                             />
                                             <Box>
                                                <Typography>
                                                   {row.product_title}
                                                </Typography>
                                                <span>{row.product_date}</span>
                                             </Box>
                                          </Box>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Box className="price">
                                             <Typography>
                                                {row.product_price}
                                             </Typography>
                                             <span>{row.price}</span>
                                          </Box>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Box className="order">
                                             <Typography>
                                                {row.orders}
                                             </Typography>
                                             <span> {row.product_order}</span>
                                          </Box>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Box className="stock">
                                             <Typography>
                                                {row.product_stock}
                                             </Typography>
                                             <span>{row.stock}</span>
                                          </Box>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Box className="amount">
                                             <Typography>
                                                {row.product_amount}
                                             </Typography>
                                             <span>{row.amout}</span>
                                          </Box>
                                       </TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <Box className="showresult">
                           <Typography>Showing 5 of 25 Results</Typography>
                           <Box className="pagination">
                              <ArrowRightAltIcon className="arrow" />
                              <Pagination count={3} color="primary" />
                              <ArrowRightAltIcon className="arrow rotate" />
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Grid>
               <Grid item xs={12} lg={6}>
                  <Box className="sellingprod seller">
                     <Box className="sortby">
                        <Box>
                           <Typography variant="h1">Top Sellers</Typography>
                        </Box>
                        <Box className="report">
                           <Button
                              id="basic-button"
                              aria-controls={open1 ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open1 ? "true" : undefined}
                              onClick={handleClick1}
                           >
                              <Typography variant="h5">
                                 Report
                                 <KeyboardArrowDownIcon />
                              </Typography>
                           </Button>
                           <Menu
                              id="basic-menu"
                              anchorEl={anchorEl1}
                              open={open1}
                              className="submenu"
                              onClose={handleClose1}
                              MenuListProps={{
                                 "aria-labelledby": "basic-button"
                              }}
                           >
                              <MenuItem onClick={handleClose1}>
                                 Download Report
                              </MenuItem>
                              <MenuItem onClick={handleClose1}>Export</MenuItem>
                              <MenuItem onClick={handleClose1}>Import</MenuItem>
                           </Menu>
                        </Box>
                     </Box>
                     <Box className="sellingdeatil">
                        <TableContainer component={Paper}>
                           <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                           >
                              <TableBody>
                                 {Product.map((product) => (
                                    <TableRow
                                       key={product.name}
                                       sx={{
                                          "&:last-child td, &:last-child th": {
                                             border: 0
                                          }
                                       }}
                                    >
                                       <TableCell component="th" scope="row">
                                          <Box className="product">
                                             <img
                                                src={product.mode}
                                                alt="tshirt"
                                             />
                                             <Box>
                                                <Typography>
                                                   {product.selling_title}
                                                </Typography>
                                                <span>
                                                   {product.selling_date}
                                                </span>
                                             </Box>
                                          </Box>
                                       </TableCell>
                                       <TableCell align="left">
                                          <span>{product.categories}</span>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Box className="order1">
                                             <Typography>
                                                {product.stockprice}
                                             </Typography>
                                             <span>{product.stock}</span>
                                          </Box>
                                       </TableCell>
                                       <TableCell align="left">
                                          <span>{product.amount}</span>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Box className="order">
                                             <Typography>
                                                {product.amout}
                                             </Typography>
                                             <BarChartIcon />
                                          </Box>
                                       </TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <Box className="showresult">
                           <Typography>Showing 5 of 25 Results</Typography>
                           <Box className="pagination">
                              <ArrowRightAltIcon className="arrow" />
                              <Pagination count={3} color="primary" />
                              <ArrowRightAltIcon className="arrow rotate" />
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </Viewstyle>
   );
};

export default View;
