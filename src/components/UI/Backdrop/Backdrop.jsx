/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import classes from './Backdrop.css';

const backdrops = (props) => {
  const { show, clickeds } = props;
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return (show ? <div className={classes.Backdrops} onClick={clickeds} /> : null);
};

backdrops.propTypes = {
  show: propTypes.bool.isRequired,
  clickeds: propTypes.func.isRequired,
};

export default backdrops;
