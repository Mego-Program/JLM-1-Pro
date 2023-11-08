import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function NewDateTime() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
      <DateTimePicker label="Basic date time picker" sx={{
  '&& *': {
    color: 'white',
    borderColor: 'white',
  },
  '&& .MuiIconButton-root': {
    color: 'white',
  },
}} />
      </DemoContainer>
    </LocalizationProvider>
  );
}