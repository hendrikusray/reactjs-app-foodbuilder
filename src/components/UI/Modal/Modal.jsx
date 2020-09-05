/* eslint-disable react/destructuring-assignment  */
/* eslint-disable react/prop-types */
import React from 'react';
import propsTypes from 'prop-types';
import classes from './Modal.css';
import Aux from '../../../Hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const { show, modalClosed } = props;
  console.log(modalClosed);
  return (
    <Aux>
      <Backdrop show={show} clickeds={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

modal.propsTypes = {
  show: propsTypes.bool.isRequired,
  modalClosed: propsTypes.func.isRequired,

};

export default modal;
