import React from 'react';
import propTypes from 'prop-types';
import Aux from '../../../Hoc/Auxillary';
import classes from './ResultOrder.css';
import Button from '../../UI/Button/Button';

// eslint-disable-next-line no-unused-vars
const ResultOrder = (props) => {
  const {
    ingredients, purchaseCancel, purchaseContinues, price,
  } = props;
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
      <p>
        <strong>
          Total Price :
          {' '}
          {price.toFixed(2)}
        </strong>
      </p>
      <p> selanjutnya atau batalkan? </p>
      <Button btnType="Danger" clicked={purchaseCancel}>Batalkan</Button>
      <Button btnType="Success" clicked={purchaseContinues}>Selanjutnya</Button>
    </Aux>
  );
};

ResultOrder.propTypes = {
  ingredients: propTypes.objectOf(propTypes.any).isRequired,
  purchaseCancel: propTypes.func.isRequired,
  purchaseContinues: propTypes.func.isRequired,
  price: propTypes.number.isRequired,
};

export default ResultOrder;
