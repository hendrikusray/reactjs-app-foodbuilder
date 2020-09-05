/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import classes from './Backdrop.css';

const backdrops = (props) => {
  const { show, clickeds } = props;
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return (show ? <div className={classes.Backdrop} onClick={clickeds} /> : null);
};

backdrops.propTypes = {
  show: propTypes.any,
  clickeds: propTypes.func.isRequired,
};

export default backdrops;
