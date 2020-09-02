import React from 'react';
import propTypes from 'prop-types';
import classes from './Food.css';
import FoodIngredient from './FoodIngredients/FoodIngridients';
import Aux from '../../Hoc/Auxillary';
import withClass from '../../Hoc/WithClass';

const Food = (props) => {
  const { ingredient } = props;
  let ingredients = Object.keys(ingredient)
    // eslint-disable-next-line react/no-array-index-key
    .map((igKey) => [...Array(ingredient[igKey])].map((_, i) => <FoodIngredient key={igKey + i} type={igKey} />))
    .reduce((arr, el) => arr.concat(el), []);

  if (ingredients.length === 0) {
    ingredients = <p>Silahkan Menambahkan Bahan !</p>;
  }

  return (
    <Aux>
      <FoodIngredient type="bread-top" />
      {ingredients}
      <FoodIngredient type="bread-bottom" />
    </Aux>
  );
};

Food.propTypes = {
  ingredient: propTypes.objectOf(propTypes.any).isRequired,
};

export default withClass(Food, classes.Food);
