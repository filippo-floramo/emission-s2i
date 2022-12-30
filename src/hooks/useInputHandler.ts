import { useEmissionApi } from "../hooks/useEmissionApi";
import { coordinatesRegExp } from "../lib/utils/miscellaneous";
import { useRouter } from 'next/router';
import useStateAtoms from "../atoms/atoms";
import useEmissionAtoms from '../atoms/emissionAtoms';



export function useInputHandler() {

   const router = useRouter();

   const { getEmissionData } = useEmissionApi();

   const { setIsModalOpen } = useStateAtoms();

   const { emissionQueries } = useEmissionAtoms();
   const {
      countryCode,
      longitude,
      latitude,
      startDate,
      endDate
   } = emissionQueries;

   const dateRange = startDate && endDate;
   const areAllFalsy = Object.values(emissionQueries).every(value => !value);


   const handleInputs = () => {

      if (areAllFalsy) {
         alert("Please fill the required fields");
      } else if (!(dateRange)) {
         alert("Please choose the date range");
      } else if (dateRange && !(countryCode || (longitude && latitude))) {
         alert("Please select and indication for the place");
      } else if (dateRange && countryCode) {

         getEmissionData()
            .then(() => {
               setIsModalOpen(false);
               router.push("/results");
            });

      } else if (dateRange && (longitude && latitude)) {

         const latitudeIsNotValid = coordinatesRegExp.test(latitude);
         const longitudeIsNotValid = coordinatesRegExp.test(longitude);

         switch (longitudeIsNotValid || latitudeIsNotValid) {
            case true:
               alert("Values in the coordinate fields must be numbers");
               break;
            case false:
               getEmissionData()
                  .then(() => {
                     setIsModalOpen(false);
                     router.push("/results");
                  });
               break;
         }
      }

   };


   return { handleInputs };
}