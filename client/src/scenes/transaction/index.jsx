import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useGetTransactionQuery } from 'state/api';
import Header from 'components/Header';
import { useTheme } from '@emotion/react';
import { HealthAndSafety, Spoke } from '@mui/icons-material';
import { Box, LinearProgress } from '@mui/material';
// import DataGridCustomToobar from "components/DataGridCustomToobar"




const Transaction = () => {
    const theme = useTheme();

    // values to be sent to backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const { data, isLoading } = useGetTransactionQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })
    // console.log(data)
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "userId",
            headerName: "user ID",
            flex: 1
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1
        },
        {
            field: "products",
            headerName: "Number Of Products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)} `
        }
    ]
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Transactions" subTitle='Entire List Of Customers' />
            <Box
                height="80vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[500],
                        borderBottom: "none",
                    },
                    // "& .MuiDataGrid-virtualScroller": {
                    //   backgroundColor: theme.palette.primary.light,
                    // },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[300],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[400]} !important`,
                    },
                }}
            >
            {!isLoading && data ? <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data.transaction) || data }
                    columns={columns}
                    rowCount={(data && data.total) ||0}
                    slots={{
                        toolbar: GridToolbar
                    }}

                    // components={{toolbar : DataGridCustomToobar}}
                />
                : 
                <LinearProgress /> }
                
            </Box>
        </Box>
    )
}

export default Transaction