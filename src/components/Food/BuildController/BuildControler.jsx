import React from 'react';
import propTypes from 'prop-types';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
  { label: 'Sayur', type: 'sayur' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Keju', type: 'keju' },
  { label: 'Daging', type: 'daging' },
];

const BuildControls = (props) => {
  const {
    ingredientAdded, ingredientRemoved, disable, price,
  } = props;

  return (
    <div className={classes.BuildControls}>
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
    </div>
  );
};

BuildControls.propTypes = {
  ingredientAdded: propTypes.func.isRequired,
  ingredientRemoved: propTypes.func.isRequired,
  disable: propTypes.objectOf(propTypes.any).isRequired,
  price: propTypes.number.isRequired,
};

export default BuildControls;
