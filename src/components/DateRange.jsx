import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function BasicDateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          disablePast
          format="DD/MM/YYYY"
          localeText={{ start: "Sprint-Start", end: "Sprint-End" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

// import * as React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// export default function BasicDateRangePicker() {
//   const [selectedDate, handleDateChange] = React.useState([null, null]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateRangePicker
//         startText="Check-in"
//         endText="Check-out"
//         value={selectedDate}
//         onChange={(newDates) => handleDateChange(newDates)}
//       />
//     </LocalizationProvider>
//   );
// }
