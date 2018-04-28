import React from 'react';
import PropTypes from 'prop-types';

// parameters from products.json
// imgs are stored in public
const Product = ({ price, quantity, title, pic}) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>
            <img src={`./imgs/${pic}`} alt="products" />
          </th>
          <th>
            <div>
              <h1>{title}</h1>
              <h3>{quantity} remaining</h3>
              {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>

)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  pic: PropTypes.string,
}

export default Product
