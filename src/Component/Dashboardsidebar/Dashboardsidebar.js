import React from "react";
import {
   LinearProgress,
   Box,
   Button,
   linearProgressClasses,
   Link,
   styled,
   Typography
} from "@mui/material";
import tshirt from "../../Assests/Image/t-shirt.png";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MailIcon from "@mui/icons-material/Mail";
import giftbox from "../../Assests/Image/giftbox.png";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import Slider from "react-slick";
import avtar from "../../Assests/Image/user .jpg";
import Dashboardsidebarstyle from "./Dashboardsidebarstyle";

const settings = {
   dots: false,
   infinite: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   vertical: true,
   verticalSwiping: true,
   beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
   },
   afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
   }
};
const Review = [
   {
      avtar: avtar,
      title: " Amazing template, very easy to...",
      by: "-by",
      hennry: "Henry Baird"
   },
   {
      avtar: avtar,
      title: " The product is very beautiful. I like it. ",
      by: "-by",
      hennry: "Nency Martino"
   },
   {
      avtar: avtar,
      title: " Great product and looks great, lots of... ",
      by: "-by",
      hennry: "Force Medicine"
   },
   {
      avtar: avtar,
      title: " Very beautiful product and Very... ",
      by: "-by",
      hennry: "Zoetic Fashion"
   },
   {
      avtar: avtar,
      title: " Amazing template, very easy to...",
      by: "-by",
      hennry: "Henry Baird"
   },
   {
      avtar: avtar,
      title: " The product is very beautiful. I like it. ",
      by: "-by",
      hennry: "Nency Martino"
   },
   {
      avtar: avtar,
      title: " Great product and looks great, lots of... ",
      by: "-by",
      hennry: "Force Medicine"
   },
   {
      avtar: avtar,
      title: " Very beautiful product and Very... ",
      by: "-by",
      hennry: "Zoetic Fashion"
   }
];
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
   height: 10,
   borderRadius: 5,
   [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
         theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
   },
   [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
   }
}));
const Dashboardsidebar = () => {
   return (
      <Dashboardsidebarstyle>
         <Box className="dasboardsidebar">
            <Box className="sidebar">
               <Box className="sidebardashboard">
                  <Box className="recentactivity">
                     <Typography variant="h6">recent activity</Typography>
                  </Box>
                  <Box className="purshase">
                     <Slider {...settings}>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Purchase by James Price
                              </Typography>
                              <Typography variant="h6">
                                 Product noise evolve smartwatch
                              </Typography>
                              <span>02:14 PM Today</span>
                           </Box>
                        </Box>
                        <Box>
                           <Box className="firstactivity">
                              <Box className="border"></Box>
                              <Box className="icon">
                                 <ShoppingCart />
                              </Box>
                              <Box className="description price">
                                 <Typography variant="h1">
                                    Purchase by James Price
                                 </Typography>
                                 <Box className="tshirtimage">
                                    <img src={tshirt} alt="tshirt" />
                                    <img src={tshirt} alt="tshirt" />
                                    <img src={tshirt} alt="tshirt" />
                                 </Box>
                                 <span>9:47 PM Yesterday</span>
                              </Box>
                           </Box>
                        </Box>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Natasha Carey have liked the products
                              </Typography>
                              <Typography variant="h6">
                                 Allow users to like products in your
                                 WooCommerce store.
                              </Typography>
                              <span>25 Dec, 2021</span>
                           </Box>
                        </Box>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Today offers by <span>Digitech Galaxy</span>
                              </Typography>
                              <Typography variant="h6">
                                 Offer is valid on orders of Rs.500 Or above for
                                 selected products only.
                              </Typography>
                              <span>12 Dec, 2021</span>
                           </Box>
                        </Box>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Favoried Product
                              </Typography>
                              <Typography variant="h6">
                                 Esther James have favorited product.
                              </Typography>
                              <span>25 Nov, 2021</span>
                           </Box>
                        </Box>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Flash sale starting
                                 <span className="tomorrow">Tomorrow.</span>
                              </Typography>
                              <Typography variant="h6">
                                 Flash sale by
                                 <span> Zoetic Fashion </span>22 Oct, 2021
                              </Typography>
                              <span>25 Nov, 2021</span>
                           </Box>
                        </Box>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Monthly sales report
                              </Typography>
                              <Typography variant="h6">
                                 <span className="days">2 days left</span>
                                 notification to submit the monthly sales
                                 report.
                                 <Link>Reports Builder</Link>
                              </Typography>
                              <span>15 Oct</span>
                           </Box>
                        </Box>
                        <Box className="firstactivity">
                           <Box className="border"></Box>
                           <Box className="icon">
                              <ShoppingCart />
                           </Box>
                           <Box className="description">
                              <Typography variant="h1">
                                 Frank Hook Commented
                              </Typography>
                              <Typography variant="h6" className="italic">
                                 " A product that has reviews is more likable to
                                 be sold than a product. "
                              </Typography>
                              <span>26 Aug, 2021</span>
                           </Box>
                        </Box>
                     </Slider>
                  </Box>
                  <Box className="category">
                     <Typography variant="h6">TOP 10 CATEGORIES</Typography>
                     <ul>
                        <li>
                           <Box className="accessories">
                              <Typography>1.Mobile & Accessories</Typography>
                              <span>(10,294)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>3.Desktop</Typography>
                              <span>(6,256)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>3.Electronics</Typography>
                              <span>(3,479)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>4.Home & Furniture</Typography>
                              <span>(2,275)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>5.Grocery</Typography>
                              <span>(1,950)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>6.Fashion</Typography>
                              <span>(1,582)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>7.Appliances</Typography>
                              <span>(1,037)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>8.Beauty, Toys & More</Typography>
                              <span>(924)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>9.Food & Drinks</Typography>
                              <span>(701)</span>
                           </Box>
                        </li>
                        <li>
                           <Box className="accessories">
                              <Typography>10.Toys & Games</Typography>
                              <span>(239)</span>
                           </Box>
                        </li>
                        <li>
                           <Link>View all Categories</Link>
                        </li>
                     </ul>
                  </Box>
                  <Box className="productreview">
                     <Typography variant="h1">PRODUCTS REVIEWS</Typography>
                     <Box className="clients">
                        {Review.map((review, key) => (
                           <Box className="template">
                              <img src={review.avtar} alt="avtar" />
                              <Box className="">
                                 <Typography variant="h1">
                                    {review.title}
                                 </Typography>
                                 <StarIcon />
                                 <StarIcon />
                                 <StarIcon />
                                 <StarIcon />
                                 <StarHalfIcon />
                                 <Typography variant="h1" className="zomentic">
                                    <span>{review.by} </span>
                                    {review.hennry}
                                 </Typography>
                              </Box>
                           </Box>
                        ))}
                     </Box>
                  </Box>
                  <Box className="customer_review">
                     <Box className="recentactivity">
                        <Typography variant="h6">CUSTOMER REVIEWS</Typography>
                     </Box>
                     <Box className="customerrating">
                        <Box>
                           <StarIcon />
                           <StarIcon />
                           <StarIcon />
                           <StarIcon />
                           <StarHalfIcon />
                        </Box>
                        <Typography variant="h4">4.5 out of 5</Typography>
                     </Box>
                     <Box className="totalreview">
                        <Typography variant="h4">
                           Total 5.50k reviews
                        </Typography>
                        <Box>
                           <Box className="progrees">
                              <Typography variant="h6">5 star</Typography>
                              <BorderLinearProgress
                                 variant="determinate"
                                 className="progreesbar"
                                 value={50}
                              />
                              <span>2758</span>
                           </Box>
                           <Box className="progrees">
                              <Typography variant="h6">4 star</Typography>
                              <BorderLinearProgress
                                 variant="determinate"
                                 className="progreesbar"
                                 value={50}
                              />
                              <span>1063</span>
                           </Box>
                           <Box className="progrees">
                              <Typography variant="h6">3 star</Typography>
                              <BorderLinearProgress
                                 variant="determinate"
                                 className="progreesbar"
                                 value={50}
                              />
                              <span>997</span>
                           </Box>
                           <Box className="progrees">
                              <Typography variant="h6">2 star</Typography>
                              <BorderLinearProgress
                                 variant="determinate"
                                 className="progreesbar"
                                 value={50}
                              />
                              <span>227</span>
                           </Box>
                           <Box className="progrees">
                              <Typography variant="h6">1 star</Typography>
                              <BorderLinearProgress
                                 variant="determinate"
                                 className="progreesbar"
                                 value={50}
                              />
                              <span>408</span>
                           </Box>
                        </Box>
                     </Box>
                     <Box className="invite">
                        <img src={giftbox} alt="giftbox" />
                        <Typography variant="h5">Invite New Seller</Typography>
                        <Typography>
                           Refer a new seller to us and earn $100 per refer.
                        </Typography>
                        <Box className="mail">
                           <MailIcon />
                           <Button>Invite Now</Button>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Dashboardsidebarstyle>
   );
};

export default Dashboardsidebar;
