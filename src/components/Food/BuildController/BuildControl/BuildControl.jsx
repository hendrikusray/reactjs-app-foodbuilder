import React from 'react';
import propsTypes from 'prop-types';
import classes from './BuildControl.css';

const buildControl = (props) => {
  const {
    label, added, remove, disable,
  } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={remove} disabled={disable} type="button">Less</button>
      <button className={classes.Food} onClick={added} type="button">More</button>
    </div>
  );
};

buildControl.propTypes = {
  label: propsTypes.string.isRequired,
  added: propsTypes.func.isRequired,
  disable: propsTypes.bool.isRequired,
  remove: propsTypes.func.isRequired,

};

export default buildControl;
