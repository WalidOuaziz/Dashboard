import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
// import BreakdownChart from "components/BreakdownChart";
import BreakdownChart from "components/BreadownChartMUI";



const Breakdown = () => {
   
  return (
   <Box m="1.5rem 2.5rem">
        <Header title="Breakdown" subTitle="Check cotegories of sales" />
        <BreakdownChart />
   </Box>
  )
}

export default Breakdown