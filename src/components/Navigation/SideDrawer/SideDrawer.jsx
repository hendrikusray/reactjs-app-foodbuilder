import React from 'react';
import propsTypes from 'prop-types';
import Aux from '../../../Hoc/Auxillary';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const { closed, open } = props;
  let attachTheClass = [classes.SideDrawer, classes.Close];
  if (open) {
    attachTheClass = [classes.SideDrawer, classes.Open];
  }

  console.log(attachTheClass);
  return (
    <Aux>
      <BackDrop show={open} clickeds={closed} />
      <div className={attachTheClass.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propsTypes = {
  open: propsTypes.bool.isRequired,
  closed: propsTypes.func.isRequired,
};

export default sideDrawer;
