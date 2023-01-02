import * as React from 'react';
import { useEmissionApi } from '../../../hooks/useEmissionApi';
import { useInputHandler } from '../../../hooks/useInputHandler';

export default function ModalSearchButton(): JSX.Element {
  const { isDataLoading } = useEmissionApi();
  const { handleInputs } = useInputHandler();

  return (
    <>
      {isDataLoading ? (
        <>Loading..</>
      ) : (
        <button
          onClick={() => {
            handleInputs();
          }}>
          Click Me
        </button>
      )}
    </>
  );
}
