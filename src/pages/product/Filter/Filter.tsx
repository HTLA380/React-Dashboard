import { FilterList } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";

const Filter: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Button
        endIcon={<FilterList />}
        onClick={() => setIsActive(true)}
        sx={{
          margin: 1,
          color: "primary.contrastText",
          textTransform: "capitalize",
          ":hover": {
            bgcolor: "#e4e4e4",
          },
        }}>
        Filters
      </Button>
      <FilterDrawer state={isActive} setState={setIsActive} />
    </React.Fragment>
  );
};

export default Filter;
