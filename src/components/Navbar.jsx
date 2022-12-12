import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";

const Navbar = ({ handleOpen }) => {
  return (
    <nav className="nav">
      <h2 className="logo">Blog</h2>
      <div>
        <Button onClick={handleOpen} variant={"outlined"}>
          <AddBoxIcon />
          Write
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
