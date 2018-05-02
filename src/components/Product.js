import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { PrimaryButtonStyle, SecondaryButtonStyle } from '../styles/ReactStyles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

import Responsive from 'react-responsive';
const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={768}/>;
const Default = props => <Responsive {...props} minWidth={768} />;

// <h3>{title} - &#36;{price}{quantity ? ` x ${quantity}` : null}</h3>
// parameters from products.json
// imgs are stored in public
var buttonIsHovered = false;
const setButtonHovered = ({ bool }) => ( buttonIsHovered = {bool} );

const Product = ({ product, onAddToCartClicked}) => (
<div className="productWrapper">
  {/* Default View */ }
  <Default>
    <div>
      <GridList>
        <GridListTile key="left" cols={1} style={{height:'auto'}}
          >
          <Image src={`./imgs/${product.pic}`}
            responsive={true}
            rounded={true} />

        </GridListTile>
        <GridListTile key="right" cols={1} style={{height:'auto'}}>
          <GridList>
              <GridListTile key="top" cols={2}>
                <div>
                  <h1>{product.title}</h1>
                  <h3>{product.quantity} remaining</h3>
                  {product.title} - &#36;{product.price}{product.quantity ? ` x ${product.quantity}` : null}
                </div>
              </GridListTile>
              <GridListTile key="bottom">
                <button
                  {...PrimaryButtonStyle.HoverButton}
                  onMouseEnter={ () => ( setButtonHovered(true) ) }
                  onMouseLeave={ () => setButtonHovered(false) }
                  className={ buttonIsHovered ? 'hover' : null}
                  onClick={ onAddToCartClicked }
                  >
                  { product.length > 0 ? 'ADD TO CART' : 'SOLD OUT'}
                </button>
              </GridListTile>
          </GridList>
        </GridListTile>
      </GridList>
    </div>
  </Default>

  {/* Mobile View */ }
  <Mobile>
    <div>
      <GridList>
        <GridListTile key="top" cols={2} style={{width:'100%', height:'100%'}}>
          <Image src={`./imgs/${product.pic}`}
            responsive={true}
            rounded={true} />
        </GridListTile>
        <GridListTile key="bottom" cols={2} style={{width:'100%'}}>
          <GridList>
              <GridListTile key="nestedBottom" cols={3} style={{width:'100%'}}>
                <div>
                  <div className="row">
                    <h1 style={{float:'left', textAlign: 'left'}} >{product.title}</h1>
                    <h2 style={{float:'right', textAlign: 'right', verticalAlign: 'top'}} >${product.price}</h2>
                    <hr style={{clear:'both', opacity: '0'}}/>
                  </div>
                  <div className="row" style={{textAlign: 'left'}} >
                    {product.quantity} remaining
                    <hr style={{clear:'both', opacity: '0'}}/>
                  </div>
                  <div className="row" style={{textAlign: 'left'}} >
                    <button
                      {...PrimaryButtonStyle.HoverButton}
                      onMouseEnter={ () => ( setButtonHovered(true) ) }
                      onMouseLeave={ () => setButtonHovered(false) }
                      className={ buttonIsHovered ? 'hover' : null}
                      onClick={ onAddToCartClicked }
                      >
                      { (product.length) > 0 ? 'ADD TO CART' : 'SOLD OUT'}
                    </button>
                    <hr style={{clear:'both', opacity: '0'}}/>
                  </div>
                </div>
              </GridListTile>

          </GridList>
        </GridListTile>
      </GridList>
    </div>
  </Mobile>

</div>
)

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    pic: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default Product
