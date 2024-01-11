import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Checkbox, styled } from "@mui/material";
import { columns, rows } from "./userTableData";

const StyledDataGrid = styled(DataGrid)({
  "&.MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "&.MuiDataGrid-root": {
    border: "none",
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
    <Box sx={{ height: 440, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        autoHeight={true}
        rowHeight={65}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
          sorting: {
            sortModel: [{ field: "company", sort: "desc" }],
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
