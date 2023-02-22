import * as React from 'react';
import styles from '../style/datePicker.module.css'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function DatePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Check-in', end: 'Check-out' }}
        >
            <DateRangePicker
                className={styles.datePicker}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}></Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}