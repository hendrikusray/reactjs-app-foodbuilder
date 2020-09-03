import React from 'react';
// import burgerLogo from './logo/logo.png';
import classes from './Logo.css';
import logoBurger from '../../assets/images/burger-logo.png';
// import Aux from '../../Hoc/Auxillary';
// import withClass from '../../Hoc/WithClass';

const logo = () => (
  <div className={classes.Logo}>
    <img src={logoBurger} alt="BurgerLogo" />
  </div>
);
export default logo;
