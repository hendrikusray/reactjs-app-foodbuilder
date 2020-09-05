/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Aux from '../Hoc/Auxillary';
import Modal from '../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, http) => (props) => {
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    http.interceptors.request.use((req) => {
      setErrors(null);
      return req;
    });

    http.interceptors.response.use((res) => res,
      (error) => {
        setErrors(error);
      });
  }, []);

  const ClickedErrorHandler = () => {
    setErrors(null);
  };

  return (
    <Aux>
      <Modal
        show={errors}
        modalClosed={ClickedErrorHandler}
      >
        {errors ? errors.message : null}
      </Modal>
      <WrappedComponent {...props} />
    </Aux>

  );
};

export default errorHandler;
