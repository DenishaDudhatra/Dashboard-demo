import React, { useState } from "react";
import { Box } from "@mui/material";
import Dashboard from "../../Component/Dashboard/Dashboard";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Sidebar from "../../Component/Sidebar/Sidebar";
import View from "../../Component/View/View";
import Visit from "../../Component/Visit/Visit";

function Maincomponent() {
   const [checked, setChecked] = useState(false);
   const [menuChart, setMenuChart] = useState(false);
   const [backopen, setBackopen] = useState(false);

   return (
      <Box>
         <Box className={backopen ? "nav opennav" : "nav"}>
            <Sidebar checked={checked} setChecked={setChecked} />
         </Box>
         <Box className={checked ? "sideopen openSidebar" : "sideopen"}>
            <Box className={checked ? "header" : ""}>
               <Header backopen={backopen} setBackopen={setBackopen} />
            </Box>
            <Box className={menuChart ? "mainpage" : ""}>
               <Dashboard menuChart={menuChart} setMenuChart={setMenuChart} />
               <View />
               <Visit />
               <Footer />
            </Box>
         </Box>
      </Box>
   );
}

export default Maincomponent;
