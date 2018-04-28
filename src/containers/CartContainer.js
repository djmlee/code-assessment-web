import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import {IoIosCartOutline, IoIosCart} from 'react-icons/lib/io/'
import CartDialog from '../components/CartDialog'
import InlineBlock from 'react-inline-block'

const CartContainer = ({ products, total, checkout }) => {
  const hasProducts = products.length > 0
  var emptyCart

  if (hasProducts)
    { emptyCart = " "; }
  else { emptyCart = "Your cart is empty" }

  return (
      <div>
        {/* This is for aligning the Cart button + "Your cart is empty"*/}
        <InlineBlock>
          <CartDialog
            products={products}
            total={total}
            checkout={checkout}
          />
        </InlineBlock>
        <InlineBlock> {emptyCart} </InlineBlock>

      </div>
    )
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
