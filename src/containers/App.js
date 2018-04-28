import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;
const appStyle = {
  width: '90vw',
  margin: '5vw'
}

const App = () => {
  return(
    <div style={appStyle}>
        <h2>Acme Store</h2>
          <Desktop><h3>Desktop or Laptop</h3></Desktop>
          <Tablet><h3>Tablet</h3></Tablet>
          <Mobile><h3>Mobile</h3></Mobile>
          <Default><h3>Not phone/mobile</h3></Default>
          <div>pLaCeHoLdEr</div>
        <div> <CartContainer /></div>
      <hr/>
        <ProductsContainer />
      <hr/>
    </div>
  )
}

export default App
