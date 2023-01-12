import { useEmissionApi } from '../hooks/useEmissionApi';
import { coordinatesRegExp } from '../lib/utils/miscellaneous';
import { useRouter } from 'next/router';
import useStateAtoms from '../atoms/atoms';
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



  const handleInputs = () => {

    const hasDates = startDate && endDate ? true : false;

    const startDateMs: number = new Date(startDate ? startDate : "").getTime();
    const endDateMs: number = new Date(endDate ? endDate : "").getTime();

    const dateRange = endDateMs - startDateMs;

    const isFieldEmpty = Object.values(emissionQueries).every((value) => !value);

    if (isFieldEmpty) {
      alert('Please fill the required fields');
    } else if (!hasDates) {
      alert('Please choose the date range');
    } else if (dateRange < 0) {
      alert("Date range is invalid");
    } else if (!(countryCode || (longitude && latitude))) {
      alert('Please select and indication for the place');
    } else if (countryCode) {
      getEmissionData().then(() => {
        setIsModalOpen(false);
        router.push('/results');
      });
    } else if (longitude && latitude) {
      const latitudeIsNotValid = coordinatesRegExp.test(latitude);
      const longitudeIsNotValid = coordinatesRegExp.test(longitude);

      switch (longitudeIsNotValid || latitudeIsNotValid) {
        case true:
          alert('Values in the coordinate fields must be numbers');
          break;
        case false:
          getEmissionData().then(() => {
            setIsModalOpen(false);
            router.push('/results');
          });
          break;
      }
    }
  };

  return { handleInputs };
}
