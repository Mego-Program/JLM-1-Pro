import React, { useEffect } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(true);
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
    setOpen(false);
  };

const [fieldsFilled, setFieldsFilled] = useState(false);

const handleClosing = () => {
  if (props.onClose) {
    props.onClose();
  }
  setOpen(false);
};

// Function to check if all required fields are filled
const checkFieldsFilled = () => {
  setFieldsFilled(header !== "" && content !== "" && selectedDate !== null);
};

useEffect(() => {
  checkFieldsFilled();
}, [header, content, selectedDate]);


  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "grey",
            border: "2px solid #ffc300",
            borderRadius: "5%",
            boxShadow: 24,
            p: 4,
            backgroundColor: "#222240",
          }}
        >
          <Container maxWidth="xl">
            <TextField
              fullWidth
              variant="outlined"
              label="Type Header"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}
              onChange={(e) => setHeader(e.target.value)}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Type Content"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}
              onChange={(e) => setContent(e.target.value)}

            />

            <TextField
              fullWidth
              variant="outlined"
              label="Type Asignee name"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}

            />

            <TextField
              fullWidth
              variant="outlined"
              label="Type Issue"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}

            />
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Choose Task deadline"
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
           
            <button
          style={{ color: "#ffc300", margin: '10px' }}
          onClick={() => {
            // Check if all required fields are filled before calling onSave
            if (fieldsFilled) {
              props.onSave({ header, content, date: selectedDate });
            }
          }}
          // Disable the button if not all required fields are filled
          disabled={!fieldsFilled}
        >
          save
        </button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
