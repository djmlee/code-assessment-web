import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

//Misc. imports
import IoIosCartOutline from 'react-icons/lib/io/ios-cart-outline'
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Responsive from 'react-responsive';
import { PrimaryButtonStyle, SecondaryButtonStyle } from '../styles/ReactStyles';

const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={768}/>;
const Default = props => <Responsive {...props} minWidth={768} />;

const cartStyle = {
  justifyContent: 'center',
  margin: 'auto'
}

var buttonIsHovered = false;
var buttonIsDisabled;
const setButtonHovered = ({ bool }) => ( buttonIsHovered = {bool} );
const setButtonDisabled = ({ bool }) => (buttonIsDisabled = {bool} );

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    // if cart is not empty
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        pic={product.pic}
      />
    )
  ) : (
    <div><IoIosCartOutline /> Your cart is empty</div>
  )

  return (
    <div>
    <div style={cartStyle}>
          <h1> Your cart</h1>
          <hr />
          <div >
            <div style={cartStyle}>{nodes} <hr /> </div>
              <div className="row" style={{display: 'inline'}}>
                <div style={{float:'left'}}>Taxes: </div> <div style={{float: 'right'}}> ${parseFloat(total*0.08875).toFixed(2)} </div>
                <br></br>
              </div>
              <div className="row" style={{display: 'inline'}}>
                <div style={{float:'left'}}>Subtotal: </div> <div style={{float: 'right'}}> ${parseFloat(total-(total*0.08875)).toFixed(2)} </div>
                <br></br>
              </div>
              <hr />
              <div className="row" style={{display: 'inline'}}>
                <div style={{float:'left'}}>Total: </div> <div style={{float: 'right'}}>${total}</div>
                <br></br>
              </div>
            <Default>
              <button
                {...PrimaryButtonStyle.HoverButton}
                onMouseEnter={ () => ( setButtonHovered(true) ) }
                onMouseLeave={ () => setButtonHovered(false) }
                className={ buttonIsHovered ? 'hover' : null}
                onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}>
                Checkout
              </button>
            </Default>

            </div>

          </div>
        </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
