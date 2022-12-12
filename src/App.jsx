import React, { useState } from "react";
import ModalEditor from "./components/ModalEditor";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Navbar handleOpen={handleOpen} />
      <div className="posts" >
        <Posts />
      </div>
      <ModalEditor open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
