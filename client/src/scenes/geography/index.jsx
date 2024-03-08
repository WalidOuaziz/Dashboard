import React from 'react';
import Header from 'components/Header';
import { useGetGeographyQuery } from 'state/api';
import { Box, CircularProgress, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
// import { geoData } from 'state/geoData';
import { geoData } from 'state/geoData';


const Geography = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetGeographyQuery();
    console.log("🚀 ~ Geography ~ data:", data)


    return (
        <Box m="1.5rem 2.5rem" >
            <Header title='Geography' subTitle="Your Client Locations" />
            <Box
                mt='20px'
                height="75vh"
                // width="100vh"
                border={`1px solid ${theme.palette.secondary[200]}`}
                borderRadius='4px'
            >
                {!isLoading && data ?
                    <ResponsiveChoropleth
                        data={data}
                        theme={{
                            axis: {
                                domain: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                    },
                                },
                                legend: {
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                                ticks: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                        strokeWidth: 1,
                                    },
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fill: theme.palette.secondary[200],
                                },
                            },
                            tooltip: {
                                container: {
                                    color: '#000000',
                                },
                            },
                        }}
                        features={geoData.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
                        domain={[0, 60]}
                        unknownColor="#666666"
                        label="properties.name"
                        valueFormat=".2s"
                        projectionScale={150}
                        projectionTranslation={[0.45, 0.6]}
                        projectionRotation={[0, 0, 0]}
                        borderWidth={0.8}
                        borderColor={theme.palette.secondary[100]}
                        legends={[
                            {
                                anchor: "bottom-right",
                                // itemBackground:theme.palette.background.alt,
                                direction: "column",
                                justify: true,
                                translateX: 30,
                                translateY: -20,
                                itemsSpacing: 0,
                                itemWidth: 94,
                                itemHeight: 18,
                                itemDirection: "left-to-right",
                                itemTextColor: theme.palette.secondary[100],
                                itemOpacity: 1,
                                symbolSize: 18,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor: theme.palette.background.alt,
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                    /> : <CircularProgress sx={{ mt: '50%', ml: '50%', color: `${theme.palette.secondary[100]}` }} />}

            </Box>
        </Box>
    )
}

export default Geography