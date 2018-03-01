import React from 'react';
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './stripe/MyStoreCheckout';

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_GzIIV3H4uObACykIGLB2b3Gi">
      <MyStoreCheckout />
    </StripeProvider>
  );
};

export default App;
