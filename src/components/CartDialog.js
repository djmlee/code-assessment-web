import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import Cart from '../components/Cart';
import {IoIosCartOutline, IoIosCart} from 'react-icons/lib/io/';
import Responsive from 'react-responsive';
const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={768}/>;
const Default = props => <Responsive {...props} minWidth={768} />;

class CartDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen, products, total, checkout} = this.props;
    const hasProducts = products.length > 0
    var cartIcon;
    var tempString;
    if(hasProducts){
      cartIcon = <IoIosCart />
      tempString = " "
    } else {
      cartIcon = <IoIosCartOutline />
      tempString = "Your cart is empty"
    }

    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          <h3>{ [cartIcon ,tempString] }</h3>
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
        >
        <Button onClick={this.handleClose} color="primary" autoFocus>
          Close
        </Button>
          <DialogContent>
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={() => checkout(products)} />
          </DialogContent>
          <Mobile>
            <div className="block"
              style={{
                padding: '15px',
                color: 'white',
                backgroundColor: '#5E97D1',
              }}
              onClick={()=> checkout(products)}
              >
              <h3 style={{textAlign: 'center', verticalAlign: 'middle'}}> Checkout </h3>
            </div>
          </Mobile>
        </Dialog>
      </div>
    );
  }
}

CartDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

export default withMobileDialog()(CartDialog);
