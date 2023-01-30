import * as React from 'react';
import Image from 'next/image';
import useStateAtoms from '../../../atoms/atoms';
import useEmissionAtoms from '../../../atoms/emissionAtoms';
import styles from './ModalCloseButton.module.scss';



export default function ModalCloseButton(): JSX.Element {
  const { setIsModalOpen } = useStateAtoms();
  const { setEmissionQueries } = useEmissionAtoms();

  return (
    <>
      <button
        className={styles.close_button}
        onClick={() => {
          setIsModalOpen(false);
          setEmissionQueries({
            countryCode: undefined,
            latitude: undefined,
            longitude: undefined,
            startDate: undefined,
            endDate: undefined,
          });
        }}>
        <Image width={20} height={20} src="/close-icon.svg" alt="close button"></Image>
      </button>
    </>
  );
}
