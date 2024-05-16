import React from "react";
import {
   Box,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Typography
} from "@mui/material";
import Footerstyle from "./Footerstyle";

const Footer = () => {
   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <Footerstyle>
         <Box className="footer">
            <Box className="copyright">
               <Typography variant="h5">2022 © Velzon.</Typography>
               <Typography variant="h5">
                  Design & Develop by Themesbrand
               </Typography>
            </Box>
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">Age</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
               >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
               </Select>
            </FormControl>
         </Box>
      </Footerstyle>
   );
};

export default Footer;
