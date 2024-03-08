import React from 'react'
import { Search, SearchOffRounded } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton
} from '@mui/x-data-grid';

import FlexBetween from './FlexBetween';



const DataGridCustomToobar = () => {
  return (
    <GridToolbarContainer>
        <FlexBetween width="100%">
            <GridToolbarColumnsButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
            <TextField 
                label= 'Search...'
                sx = {{ mb: '0.5rem', width: "15rem" }}
                // onChange={(e) => setSearchInput(e.target.value)}
                // value={serachInput}
                inputProps={{
                    endAdornment : (
                        <InputAdornment position='end' >
                            <IconButton 
                                onClick={() => {}}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </FlexBetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToobar;