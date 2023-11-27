import React, { useEffect } from "react";
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
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <Modal
        open={true}
        onClose={async () => {
          await props.onClose();
        }}
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
              required
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Type Content"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Type Asignee name"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}
              required
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Type Issue"
              InputLabelProps={{ style: { color: "#ffc300" } }}
              InputProps={{ style: { color: "#ffc300" } }}
              style={{ marginBottom: "20px", border: "solid #ffc300" }}
              required
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Choose Task deadline"
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#fff" },
                    svg: { color: "#fff" },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <button
              style={{
                color: "#ffc300",
                margin: "10px",
                padding: "5px 15px",
                borderRadius: "0.5rem",
                border: "1px solid #ffc300",
              }}
              onClick={() => {
                props.onSave({ header, content, date: selectedDate });
              }}
              disabled={false}
            >
              save
            </button>
            <button
              style={{
                color: "#ffc300",
                margin: "10px",
                padding: "5px 15px",
                borderRadius: "0.5rem",
                border: "1px solid #ffc300",
              }}
              onClick={props.onClose}
              disabled={false}
            >
              close
            </button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
