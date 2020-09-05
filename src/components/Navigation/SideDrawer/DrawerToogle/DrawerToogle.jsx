/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import propsType from 'prop-types';
import classes from './DrawerToogle.css';

const drawerToogle = (props) => {
  const { clicked } = props;
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div />
      <div />
      <div />
      <div />
    </div>

  );
};

drawerToogle.propsType = {
  clicked: propsType.func.isRequired,
};

export default drawerToogle;
