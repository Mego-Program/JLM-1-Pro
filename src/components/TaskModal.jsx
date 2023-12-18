import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import UserValidation from "./validation";
import dayjs from 'dayjs';

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
  const [header, setHeader] = useState(props.header || "");
  const [content, setContent] = useState(props.content || "");
  const [selectedDate, setSelectedDate] = useState(dayjs(props.selectedDate) || null);
  const [asignee, setAsignee] = useState(props.asignee || "");
  const [issue, setIssue] = useState(props.issue || "");
  const [errors, setErrors] = useState({}); 

  const createUser = async (event) => {
    event.preventDefault();

    let formData = {
      header: header,
      content: content,
      issue: issue,
      asignee: asignee,
      selectedDate:selectedDate

    };

    try {
      await UserValidation.validate(formData, { abortEarly: false });
      // Validation passed, handle form submission logic here
      console.log("Form is valid");
      setErrors({});
      props.onSave({ header, content, date: selectedDate, issue, asignee });
      
    } catch (error) {
      // Validation failed, update errors state
      const newErrors = {};
      error.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);

      // Log error messages
      console.log("Validation errors:", newErrors);
    }
  };

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
            <form onSubmit={createUser}>
              <TextField
                fullWidth
                variant="outlined"
                label="Type Header"
                InputLabelProps={{ style: { color: "#ffc300" } }}
                InputProps={{ style: { color: "#ffc300" } }}
                style={{ marginBottom: "20px", border: "solid #ffc300" }}
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                required
              />

              {errors.header && (
                <div style={{ color: "red" ,marginBottom: '20px'}}>{errors.header}</div>
              )}

              <TextField
                fullWidth
                variant="outlined"
                label="Type Content"
                InputLabelProps={{ style: { color: "#ffc300" } }}
                InputProps={{ style: { color: "#ffc300" } }}
                style={{ marginBottom: "20px", border: "solid #ffc300" }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />

              <TextField
                fullWidth
                variant="outlined"
                label="Type Asignee"
                InputLabelProps={{ style: { color: "#ffc300" } }}
                InputProps={{ style: { color: "#ffc300" } }}
                style={{ marginBottom: "20px", border: "solid #ffc300" }}
                value={asignee}
                onChange={(e) => setAsignee(e.target.value)}
                required
              />
              {errors.asignee && (
                <div style={{ color: "red" , marginBottom: '20px'}}>{errors.asignee}</div>
              )}

              <TextField
                fullWidth
                variant="outlined"
                label="Type Issue"
                InputLabelProps={{ style: { color: "#ffc300" } }}
                InputProps={{ style: { color: "#ffc300" } }}
                style={{ marginBottom: "20px", border: "solid #ffc300" }}
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
              />
              {errors.issue && (
                <div style={{ color: "red" ,marginBottom: '20px'}}>{errors.issue}</div>
              )}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    className="dp"
                    label="Choose Task deadline"
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    format="DD/MM/YYYY"
                    disablePast
                    sx={{
                      input: { color: "#ffc300" },
                      label: {
                        color: "#ffc300", 
                        "&.Mui-focused": {
                          color: "#ffc300", 
                        },
                      },
                      svg: { color: "#ffc300" },
                      "& .MuiInputBase-root:not(.Mui-focused) .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#ffc300",
                        },
                      "&:hover .MuiInputBase-root:not(.Mui-focused) .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "red",
                        },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <button
                type="submit"
                style={{
                  color: "#ffc300",
                  margin: "10px",
                  padding: "5px 15px",
                  borderRadius: "0.5rem",
                  border: "1px solid #ffc300",
                  marginTop: "30px",
                }}

                // disabled={!header || !content || !selectedDate}
              >
                Save
              </button>
              <button
                type="button"
                style={{
                  color: "#ffc300",
                  margin: "10px",
                  padding: "5px 15px",
                  borderRadius: "0.5rem",
                  border: "1px solid #ffc300",
                }}
                onClick={() => props.onClose()}
                disabled={false}
              >
                Close
              </button>
            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

