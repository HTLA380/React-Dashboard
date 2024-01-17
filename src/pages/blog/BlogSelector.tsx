import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const BlogSelector: React.FC = () => {
  const [state, setState] = React.useState("latest");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state}
        color="info"
        onChange={handleChange}>
        <MenuItem value={"latest"}>Latest</MenuItem>
        <MenuItem value={"popular"}>Popular</MenuItem>
        <MenuItem value={"oldest"}>Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BlogSelector;
