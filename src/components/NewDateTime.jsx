import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function NewDateTime() {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={handleContainerClick}
        >
          <DateTimePicker
            label=""
            ampm={false}
            format='DD\MM\YYYY HH:mm'
            sx={{
              '&& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
                color: 'white',
              },
              '&& .MuiInputBase-input': {
                fontSize: 'x-small', // Adjust the font size as needed
              },
              '&& .MuiIconButton-root': {
                color: '#FFC300 ',
                marginLeft: '8px',
              },
            }}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default NewDateTime;
