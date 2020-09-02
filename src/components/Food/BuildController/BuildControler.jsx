import React from 'react';
import propTypes from 'prop-types';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Aux from '../../../Hoc/Auxillary';
import withClass from '../../../Hoc/WithClass';

const control = [
  { label: 'Sayur', type: 'sayur' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Keju', type: 'keju' },
  { label: 'Daging', type: 'daging' },
];

const BuildControls = (props) => {
  const {
    ingredientAdded, ingredientRemoved,
    disable, price, purch, ordered,
  } = props;

  return (
    <Aux>
      <p>
        Harga Sekarang :
        {' '}
        <strong>{price.toFixed(2)}</strong>
      </p>
      {control.map((result) => (
        <BuildControl
          key={result.label}
          label={result.label}
          added={() => ingredientAdded(result.type)}
          remove={() => ingredientRemoved(result.type)}
          disable={disable[result.type]}
          price={price}
        />
      ))}
      <button type="button" onClick={ordered} disabled={!purch} className={classes.OrderButton}>order</button>
    </Aux>
  );
};

BuildControls.propTypes = {
  ingredientAdded: propTypes.func.isRequired,
  ingredientRemoved: propTypes.func.isRequired,
  disable: propTypes.objectOf(propTypes.any).isRequired,
  price: propTypes.number.isRequired,
  purch: propTypes.bool.isRequired,
  ordered: propTypes.func.isRequired,
};

export default withClass(BuildControls, classes.BuildControls);
