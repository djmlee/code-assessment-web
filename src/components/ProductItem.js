import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import Card, { CardContent , CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

import PrimaryButton from './PrimaryButton';
import { PrimaryButtonStyle, SecondaryButtonStyle } from '../styles/ReactStyles';
/*
        <PrimaryButton
          inventory={product.inventory}
          onAddToCartClicked={onAddToCartClicked}>
        </PrimaryButton>
        */
/*
  <Card style={{width:'100%',height:'100%'}}>
  <CardContent>
  </Card>
*/
var buttonIsHovered = false;
const setButtonHovered = ({ bool }) => ( buttonIsHovered = {bool} );

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: '2vw', borderRadius:'10px' }}>
    <Card>
      <CardContent>
        <Product
          product={product}
          addCart={onAddToCartClicked}
        />
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
