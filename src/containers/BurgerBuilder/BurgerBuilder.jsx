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
import Loader from '../../components/UI/Spinner/Spinner';
import HTTP from '../../service/HTTP';
import ErrorHandler from '../../error_handler/ErrorHandler';

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
  const [loading, setLoading] = useState(false);

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

  const purchesHandler = async () => {
    setLoading(true);

    const payload = {
      ingredients: ingredient,
      price: totalPrice,
      constumer: {
        name: 'ray',
        address: {
          street: 'Srowolan',
          city: 'yogyakarta',
          district: 'Pakem',
          country: 'Indonesia',
        },
        email: 'hendrikusray@gmail.com',
      },
      method: 'Payment',
    };
    // const sendPayload = await HTTP.post('orders', payload);
    // sendPayload.status === 200 ? setLoading(false) : setLoading(true);
    // if (sendPayload.status === 200) {
    //   setLoading(false);
    //   setPurchasing(false);
    // } else {
    //   setLoading(true);
    //   setPurchasing(true);
    // }

    HTTP.post('/orders.json', payload)
      .then(() => {
        setLoading(false);
        setPurchasing(false);
      })
      .catch(() => {
        setLoading(true);
        setPurchasing(true);
      });
  };

  const disableInfo = { ...ingredient };
  // copy from ingredient because ingredient is mutable therefore to change immutable using es6 spread operator

  const disableButton = _.mapValues(disableInfo, (val) => val <= 0);
  // using lodash to check value of object if val <= 0 to true >= 0 to false

  let orderResult = (
    <ResultOrder
      ingredients={ingredient}
      purchaseCancel={cancelPurchaseHandler}
      purchaseContinues={purchesHandler}
      price={totalPrice}
    />
  );

  if (loading) {
    orderResult = <Loader />;
  }

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={cancelPurchaseHandler}>
        {' '}
        {orderResult}
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

export default ErrorHandler(BurgerBuilder, HTTP);
