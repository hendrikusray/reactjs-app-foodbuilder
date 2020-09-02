/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import _ from 'lodash';
import Aux from '../../Hoc/Auxillary';
import Food from '../../components/Food/Food';
import BuildControls from '../../components/Food/BuildController/BuildControler';
import Modal from '../../components/UI/Modal/Modal';
import ResultOrder from '../../components/Food/ResultOrder/ResultOrder';

const priceIngredient = {
  sayur: 13,
  keju: 1.7,
  daging: 1.9,
  bacon: 0.2,
};

const BurgerBuilder = () => {
  const [ingredient, setIngredient] = useState({
    sayur: 0,
    bacon: 0,
    keju: 0,
    daging: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchs, setPurches] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchs = (ingredients) => {
    console.log(ingredients);
    const sum = Object.keys(ingredients)
      .map((result) => ingredients[result])
      .reduce((sux, el) => (sux + el), 0);
    console.log(Object.keys(ingredients).map((x) => ingredients[x]).reduce((s, p) => (s + p), 0));
    setPurches(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredient[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...ingredient,
    };
    updateIngredients[type] = updateCount;
    const PriceAddition = priceIngredient[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + PriceAddition;
    setTotalPrice(newPrice);
    setIngredient(updateIngredients);
    updatePurchs(updateIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...ingredient,
    };
    updateIngredients[type] = updateCount;
    const PriceAddition = priceIngredient[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - PriceAddition;
    setTotalPrice(newPrice);
    setIngredient(updateIngredients);
    updatePurchs(updateIngredients);
  };

  const PuchaseHandler = () => {
    setPurchasing(true);
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const purchesHandler = () => {
    alert('order selanjutnyaa...');
  };

  const disableInfo = { ...ingredient };

  const disableButton = _.mapValues(disableInfo, (val) => val <= 0);

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={cancelPurchaseHandler}>
        {' '}
        <ResultOrder
          ingredients={ingredient}
          purchaseCancel={cancelPurchaseHandler}
          purchaseContinues={purchesHandler}
          price={totalPrice}
        />
        {' '}
      </Modal>
      <Food ingredient={ingredient} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disable={disableButton}
        price={totalPrice}
        ordered={PuchaseHandler}
        purch={purchs}
      />
    </Aux>
  );
};
export default BurgerBuilder;
