import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Checkbox, styled } from "@mui/material";
import { columns, rows } from "./userTableData";

const StyledDataGrid = styled(DataGrid)({
  "&.MuiDataGrid-root": {
    border: "none",
  },
  "&.MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#f4f6f8",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "normal",
  },
});

const UserTable: React.FC = () => {
  return (
    <Box sx={{ width: "100%", height: 434 }}>
      <StyledDataGrid
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
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
        }}
        slotProps={{
          baseCheckbox: { color: "info" },
        }}
      />
    </Box>
  );
};

export default UserTable;
