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

    if(hasProducts){
      cartIcon = <IoIosCart />
    } else {
      cartIcon = <IoIosCartOutline />
    }

    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          <h3>{ cartIcon }</h3>
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogContent>
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={() => checkout(products)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
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
