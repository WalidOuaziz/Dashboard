import React from 'react'


import Header from 'components/Header';
import { Box, useTheme } from '@mui/material';
import { useGetAdminQuery } from "state/api"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const Admin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5
    },
  ]

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Admins" subTitle="Our admins" />
      <Box mt="40px" height='75vh'
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
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          
         />
      </Box>
    </Box>
  )
}

export default Admin