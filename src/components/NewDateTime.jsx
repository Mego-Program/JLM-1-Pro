import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function NewDateTime() {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <div
          style={{
            // display: "flex",
            // flexDirection: 'column',
            // alignItems: "center",
            // justifyContent: "flex-end",
            // hight: '100%',
            // bottom: '8px'
            zIndex: '-1',
          }}
          onClick={handleContainerClick}
        >
          <DateTimePicker
            label=""
            ampm={false}
            format="DD\MM\YYYY HH:mm"
            disablePast
            sx={{
              "&& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                color: "white",
              },
              '&& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              "&& .MuiInputBase-input": {
                fontSize: "x-small",
                border: 'none',
              },
              "&& .MuiIconButton-root": {
                color: "#ffc300",
                marginLeft: "8px",
              },
            }}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default NewDateTime;
