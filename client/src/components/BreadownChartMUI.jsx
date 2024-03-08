import React from "react";
import { Pie, PieChart } from "@mui/x-charts/PieChart"
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api";
// import { ResponsivePie } from "@nivo/pie";

const BreakdownChart = ({ isDashboard = false }) => {
    const { data, isLoading } = useGetSalesQuery();

    const theme = useTheme();

    if (!data || isLoading) return <LinearProgress />;

    const colors = [
        theme.palette.secondary[100],
        theme.palette.secondary[300],
        theme.palette.secondary[500],
        theme.palette.secondary[700],
    ];
    const formattedData = Object.entries(data.salesByCategory).map(
        ([category, sales], i) => ({
            id: category,
            value: sales,
            label: category,
            color: colors[i],
        })
    );
    console.log("formattedData:", formattedData)


    return (
        <Box
            height={isDashboard ? "400px" : "100%"}
            width={undefined}
            minHeight={isDashboard ? "325px" : undefined}
            minWidth={isDashboard ? "325px" : undefined}
            position="relative"
            display="flex"
            justifyContent="center"  // Center horizontally
            alignItems="center"  // Center vertically
        // p="1rem"
        >
            <Box
                // border={`1px solid ${theme.palette.secondary[200]}`}
                borderRadius='8px'
                position="relative"
                display="flex"
                justifyContent="center" // Center horizontally
                alignItems="center" // Center vertically            
            >
                <PieChart
                    series={[
                        {
                            data: formattedData,
                            outerRadius: 200,
                            paddingAngle: 10,
                            cornerRadius: 5,
                            startAngle: -90,
                        },
                    ]}

                    width={500}
                    height={500}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: { vertical: 'bottom', horizontal: 'middle' },
                            padding: 10,
                        },
                    }}
                />
            </Box>

            <Box
                position="absolute"
                top="5%"
                right="10%"
                color={theme.palette.secondary[400]}
                textAlign="center"
                pointerEvents="none"
                sx={{
                    transform: isDashboard
                        ? "translate(-75%, -170%)"
                        : "translate(-50%, -100%)",
                }}
            >
                <Typography variant="h6">
                    {!isDashboard && "Total :"} ${data.yearlySalesTotal}
                </Typography>
            </Box>
        </Box>
    );
};

export default BreakdownChart;