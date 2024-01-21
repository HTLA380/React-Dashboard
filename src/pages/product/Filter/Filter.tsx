import { FilterList } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";
import { grey } from "../../../theme/palette";

const Filter: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Button
        endIcon={<FilterList />}
        onClick={() => setIsActive(true)}
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          ":hover": {
            color: "text.primary",
            backgroundColor: grey[300],
          },
        }}>
        Filters
      </Button>
      <FilterDrawer state={isActive} setState={setIsActive} />
    </React.Fragment>
  );
};

export default Filter;
