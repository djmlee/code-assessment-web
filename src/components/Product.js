import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';

// parameters from products.json
// imgs are stored in public
const Product = ({ price, quantity, title, pic}) => (
  <div>
    <Image src={`./imgs/${pic}`}
      responsive={true}
      rounded={true} />
    <div>
      <h1>{title}</h1>
      <h3>{quantity} remaining</h3>
      {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
  </div>

)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  pic: PropTypes.string,
}

export default Product
