import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import Responsive from 'react-responsive';
import InlineBlock from 'react-inline-block';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991}/>;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;


const appStyle = {
  width: '90vw',
  margin: '5vw'
}
const left = {
  width: '20%',
  textAlign: 'left'
}
const right ={
  width: '80%',
  textAlign: 'right'
}

const App = () => {
  return(
    <div style={appStyle}>
      <div className="header" >
        <InlineBlock style={left}>
          <h1>Acme Store </h1>
        </InlineBlock>
        <InlineBlock style={right}>
          <CartContainer />
        </InlineBlock>
      </div>
        <div className="viewportSize">
          <Default component="null"></Default>
          <Desktop component="h3"> Desktop/Laptop </Desktop>
          <Tablet component="h3"> Tablet </Tablet>
          <Mobile component="h3"> Mobile </Mobile>
        </div>
      <hr/>
        <ProductsContainer />
      <hr/>
    </div>
  )
}

export default App
