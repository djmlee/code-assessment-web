import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import Card, { CardContent } from 'material-ui/Card';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: '1vw' }}>
    <Card>
      <CardContent>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.inventory}
          pic={product.pic}
          addCart={onAddToCartClicked}
          />
          <button
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}>
            {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
          </button>
      </CardContent>
    </Card>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    pic: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
