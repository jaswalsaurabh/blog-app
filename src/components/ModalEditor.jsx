import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius:"10px",
  boxShadow: 24,
  p: 4,
};

const ModalEditor = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} padding={3}>
          <Typography variant={"h4"}>Create Post</Typography>
          <TextField
            fullWidth
            size={"small"}
            type={"text"}
            label="Blog Title"
            className="input"
          />
          <textarea className="textArea" placeholder="Start your story...."></textarea>
          <Button fullWidth variant="outlined" >Publish</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEditor;
