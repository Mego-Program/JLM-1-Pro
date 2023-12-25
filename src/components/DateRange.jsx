import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from 'dayjs';

export default function DateRange({updateDate}) {
  // const [value, setValue] = React.useState([]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker        
          onChange={(newValue) => updateDate(newValue)}
          disablePast
          format="DD/MM/YYYY"
          localeText={{ start: "Sprint-Start", end: "Sprint-End" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}