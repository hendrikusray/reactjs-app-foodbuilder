import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './FoodIngridients.css';

class BurgerIngredient extends Component {
  render() {
    const { type } = this.props;
    let ingredient = null;

    switch (type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case ('daging'):
        ingredient = <div className={classes.Meat} />;
        break;
      case ('keju'):
        ingredient = <div className={classes.Cheese} />;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon} />;
        break;
      case ('sayur'):
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
