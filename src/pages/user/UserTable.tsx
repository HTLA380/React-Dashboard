import React from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Card, Checkbox, IconButton, Toolbar } from "@mui/material";
import { columns, users } from "./userTableData";
import { FilterList } from "@mui/icons-material";

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
    <Card sx={{ width: { xs: "90vw", lg: "100%" }, marginX: "auto" }}>
      <DataGrid
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        disableColumnFilter
        columns={columns}
        rows={users}
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
            backgroundColor: "background.neutral",
            overflow: "hidden",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "normal",
          },
        }}
      />
    </Card>
  );
};

export default UserTable;
