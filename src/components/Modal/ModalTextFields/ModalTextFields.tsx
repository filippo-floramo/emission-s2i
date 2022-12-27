import React from "react";
import { coordinatesRegExp } from "../../../lib/utils/miscellaneous";
import useEmissionAtoms from "../../../atoms/emissionAtoms";
import TextField from '@mui/material/TextField';
import styles from "./ModalTextFields.module.scss";



export default function ModalTextFields(): JSX.Element {

   const { emissionQueries, setEmissionQueries } = useEmissionAtoms();

   const { longitude, latitude } = emissionQueries;

   return (
      <div className={styles.coordinates}>

         <p> Coordinates</p>

         <TextField
            id="latitude"
            placeholder="Latitude"
            size="small"
            variant="filled"
            error={latitude?.match(coordinatesRegExp) ? true : false}
            helperText={latitude?.match(coordinatesRegExp) ? "Value must be a number." : " "}
            value={latitude || ""}
            onChange={(e) => {
               setEmissionQueries((prev) => ({ ...prev, latitude: e.target.value }));
            }}
         />
         <TextField
            id="longitude"
            placeholder="Longitude"
            size="small"
            variant="filled"
            error={longitude?.match(coordinatesRegExp) ? true : false}
            helperText={longitude?.match(coordinatesRegExp) ? "Value must be a number." : " "}
            value={longitude || ""}
            onChange={(e) => {
               setEmissionQueries((prev) => ({ ...prev, longitude: e.target.value }));
            }}
         />
      </div>
   );
}