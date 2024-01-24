import { Popover } from "@mui/material";
import React from "react";

interface PopoverElInterface {
  ControlBtn: React.ReactNode;
  margin?: string;
  anchorOrigin?: {
    vertical: "top" | "center" | "bottom";
    horizontal: "left" | "center" | "right";
  };
  transformOrigin?: {
    vertical: "top" | "center" | "bottom";
    horizontal: "left" | "center" | "right";
  };
  children: React.ReactNode;
}

const PopoverEl: React.FC<PopoverElInterface> = ({
  ControlBtn: Btn,
  margin = 0,
  anchorOrigin = { vertical: "bottom", horizontal: "right" },
  transformOrigin = {
    vertical: "top",
    horizontal: "right",
  },
  children,
}) => {
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
  const id = open ? "popover" : undefined;

  return (
    <div>
      {React.cloneElement(Btn as React.ReactElement, { onClick: handleClick })}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        sx={{ margin: margin }}>
        {children}
      </Popover>
    </div>
  );
};

export default PopoverEl;
