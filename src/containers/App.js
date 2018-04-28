import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import MediaQuery from 'react-responsive';

const appStyle = {
  width: '90vw',
  margin: '5vw'
}

const App = () => {
  return(
    <div style={appStyle}>
        <h2>Acme Store</h2>
          <MediaQuery minDeviceWidth={1824}>
            <h3>You're on a B I G B O I</h3>
          </MediaQuery>
          <MediaQuery minDeviceWidth={1024}>
            <h3>You're on a C O M P U T E R</h3>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1024}>
            <h3>You're on a MoBiLe DeViCe</h3>
          </MediaQuery>
          <MediaQuery orientation="landscape">
            <h3>l A n D s C a P e</h3>
          </MediaQuery>
          <MediaQuery orientation="portrait">
            <h3>P o R t R a I t</h3>
          </MediaQuery>
          <div>pLaCeHoLdEr</div>
        <div> <CartContainer /></div>
      <hr/>
        <ProductsContainer />
      <hr/>
    </div>
  )
}

export default App
