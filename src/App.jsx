import React from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Aux from './Hoc/Auxillary';

function App() {
  return (
    <Aux>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </Aux>
  );
}

export default App;
