/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import propsTypes from 'prop-types';
import classes from './Layout.css';
import Aux from '../../Hoc/Auxillary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
  const [showSide, setShowSide] = useState(false);

  const sideCloseDrawer = () => {
    console.log('button-transparent');
    setShowSide(false);
  };

  const sideOpenDrawer = () => {
    setShowSide(true);
  };

  return (
    <Aux>
      <Toolbar
        clickeds={sideOpenDrawer}
      />
      <SideDrawer
        closed={sideCloseDrawer}
        open={showSide}
      />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

layout.propsTypes = {
  children: propsTypes.node.isRequired,
};

export default layout;
