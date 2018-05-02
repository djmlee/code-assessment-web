import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import Responsive from 'react-responsive';
import InlineBlock from 'react-inline-block';
import { AppStyle, hrStyle } from '../styles/ReactStyles';

const Desktop = props => <Responsive {...props} minWidth={1280} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1280}/>;
const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={768}/>;
const Default = props => <Responsive {...props} minWidth={768} />;


const left = {
  width: '20%',
  textAlign: 'left'
}
const right ={
  width: '80%',
  textAlign: 'right'
}
/*           <InlineBlock style={left}>
            <h1>Acme Store </h1>
          </InlineBlock>
          <InlineBlock style={right}>
            <CartContainer />
          </InlineBlock> */
const App = () => {
  return(
    <div name = "appWrapper">
      <Mobile style={hrStyle}>
        <div style={AppStyle}>
          <div className="header" >
              <h1>Acme Store </h1>
              <CartContainer />
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
      </Mobile>

      <Default style={hrStyle}>
        <div style={AppStyle}>
          <div className="header" >
              <h1>Acme Store </h1>
              <CartContainer />
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
      </Default>
    </div>
  )
}

export default App
