import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";
import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider, styled } from "@mui/system";

const StyledDatePicker = styled(DatePicker)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
      
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff",
  },
});

const newTheme = createTheme({
  components: {
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: "#1565c0",
          borderRadius: 2,
          borderWidth: 1,
          borderColor: "#2196f3",
          border: "1px solid",
          backgroundColor: "#bbdefb",
        },
      },
    },
  },
});

const WhiteDatePicker = () => {
  const [selectedDate, handleDateChange] = useState(null);

  return (
    <ThemeProvider theme={newTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledDatePicker
          label="Choose Date"
          value={selectedDate}
          onChange={(newDate) => handleDateChange(newDate)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
            />
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default WhiteDatePicker;
