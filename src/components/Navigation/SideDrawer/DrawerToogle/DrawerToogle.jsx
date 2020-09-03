/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import propsType from 'prop-types';

const drawerToogle = (props) => {
  const { clicked } = props;
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return (<div onClick={clicked}> Menu </div>);
};

drawerToogle.propsType = {
  clicked: propsType.func.isRequired,
};

export default drawerToogle;
