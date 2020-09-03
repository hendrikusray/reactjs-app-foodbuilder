import React from 'react';
import propsType from 'prop-types';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

const toolbar = (props) => {
  const { clickeds } = props;
  return (
    <header className={classes.Toolbar}>
      <DrawToogle clicked={clickeds} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

toolbar.propsType = {
  clickeds: propsType.func.isRequired,
};

export default toolbar;
