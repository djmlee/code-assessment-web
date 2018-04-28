import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

//Misc. imports
import IoIosCartOutline from 'react-icons/lib/io/ios-cart-outline'
import Card, { CardContent } from 'material-ui/Card';

const cartStyle = {
  justifyContent: 'center',
  margin: 'auto'
}

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
    <div style={cartStyle}>
      <Card>
        <CardContent>
          <h3>Your Cart</h3>
          <hr />
          <div >
            <div style={cartStyle}>{nodes} <hr /> </div>
            <div>Total: &#36;{total}</div>
            <div><button onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button> </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
