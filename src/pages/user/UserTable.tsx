import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Checkbox, IconButton, Toolbar, styled } from "@mui/material";
import { columns, rows } from "./userTableData";
import { List } from "@mui/icons-material";

const StyledDataGrid = styled(DataGrid)({
  "&.MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#f4f6f8",
    overflow: "hidden",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "normal",
  },
});

function QuickSearchToolbar() {
  return (
    <Toolbar sx={{ padding: 3, justifyContent: "space-between" }}>
      <GridToolbarQuickFilter variant="outlined" placeholder="Search User..." />

      <IconButton>
        <List />
      </IconButton>
    </Toolbar>
  );
}

const UserTable: React.FC = () => {
  return (
    <Box sx={{ width: "100%", minHeight: 434 }}>
      <StyledDataGrid
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        disableColumnFilter
        rowHeight={65}
        columns={columns}
        rows={rows}
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
      />
    </Box>
  );
};

export default UserTable;
