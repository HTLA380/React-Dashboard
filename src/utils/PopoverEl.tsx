import { Popover } from "@mui/material";
import React from "react";

interface PopoverElInterface {
  Btn: React.ReactNode;
  PopoverContent: React.ReactNode;
}

const PopoverEl: React.FC<PopoverElInterface> = ({ Btn, PopoverContent }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {React.cloneElement(Btn as React.ReactElement, { onClick: handleClick })}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        {PopoverContent}
      </Popover>
    </div>
  );
};

export default PopoverEl;
