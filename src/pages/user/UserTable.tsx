import React from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Checkbox, IconButton, Toolbar } from "@mui/material";
import { columns, rows } from "./userTableData";
import { FilterList } from "@mui/icons-material";
import { StyledCard } from "../../components/Styles";

const QuickSearchToolbar: React.FC = () => {
  return (
    <Toolbar sx={{ padding: 3, justifyContent: "space-between" }}>
      <GridToolbarQuickFilter variant="outlined" placeholder="Search User..." />

      <IconButton>
        <FilterList />
      </IconButton>
    </Toolbar>
  );
};

const UserTable: React.FC = () => {
  return (
    <StyledCard sx={{ width: { xs: "90vw", lg: "100%" }, marginX: "auto" }}>
      <DataGrid
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        disableColumnFilter
        columns={columns}
        rows={rows}
        rowHeight={65}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
          sorting: {
            sortModel: [{ field: "name", sort: "asc" }],
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        slots={{
          baseCheckbox: (params) => <Checkbox {...params} />,
          toolbar: QuickSearchToolbar,
        }}
        slotProps={{
          baseCheckbox: { color: "info" },
          toolbar: {
            showQuickFilter: true,
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
        sx={{
          "&.MuiDataGrid-root": {
            border: "none",
            minHeight: 540,
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#f4f6f8",
            overflow: "hidden",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "normal",
          },
          "& .MuiDataGrid-main": {},
        }}
      />
    </StyledCard>
  );
};

export default UserTable;
