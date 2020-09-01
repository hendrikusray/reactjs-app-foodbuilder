/* eslint-disable */
import React from 'react';
import propsTypes from 'prop-types';
import classes from './Layout.css';
import Aux from '../../Hoc/Auxillary';


const layout = (props) => (
  <Aux>
    <div>Toolbar,sidedrawe,backdrop </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

layout.propsTypes = {
  children: propsTypes.node.isRequired,
};

export default layout;
