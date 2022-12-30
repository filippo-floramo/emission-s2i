import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import useEmissionAtoms from '../../../atoms/emissionAtoms';
import TextField from '@mui/material/TextField';
import styles from "./ModalDatePickers.module.scss";


type DateTypes = Dayjs | null


export default function ModalDatePickers(): JSX.Element {

   const { emissionQueries, setEmissionQueries } = useEmissionAtoms();

   const { startDate, endDate } = emissionQueries;

   return (
      <div className={styles.date_range}>
         <p>Pick the date Range</p>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               label="Start Date"
               value={startDate ? startDate : null}
               onChange={(newValue: DateTypes) => {
                  if (newValue) {
                     setEmissionQueries((prev) => ({ ...prev, startDate: newValue.toJSON() }));
                  };
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               label="End Date"
               value={endDate ? endDate : null}
               onChange={(newValue: DateTypes) => {
                  if (newValue) {
                     setEmissionQueries((prev) => ({ ...prev, endDate: newValue.toJSON() }));
                  };
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>
      </div>
   );
}