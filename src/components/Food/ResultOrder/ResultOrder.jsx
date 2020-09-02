import React from 'react';
import propTypes from 'prop-types';
import Aux from '../../../Hoc/Auxillary';
import classes from './ResultOrder.css';

// eslint-disable-next-line no-unused-vars
const ResultOrder = (props) => {
  const { ingredients } = props;
  const Summary = Object.keys(ingredients)
    .map((result) => (
      <li key={result}>
        <span style={{ textTransform: 'capitalize' }}>{result}</span>
        {' '}
        :
        {' '}
        {ingredients[result]}
      </li>
    ));

  return (
    <Aux>
      <h3 className={classes.Title}> OrderanKu </h3>
      <p> Bahan dari Burger </p>
      <ul>
        {Summary}
      </ul>
      <p> selesai ? </p>
    </Aux>
  );
};

ResultOrder.propTypes = {
  ingredients: propTypes.objectOf(propTypes.any).isRequired,
};

export default ResultOrder;
