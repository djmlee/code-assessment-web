/**
  * This is an unfinished file.
  * Was not able to allocate enough time to clean up this code
  * and get it fully working
  */
import React from 'react';
import PropTypes from 'prop-types'
import { PrimaryButtonStyle, SecondaryButtonStyle } from '../styles/ReactStyles';

const PrimaryButton = ({inventory, onAddToCartClicked}) => {
  var buttonIsHovered = false;
  var buttonIsDisabled;
  const setButtonHovered = ({ bool }) => ( buttonIsHovered = {bool} );
  const setButtonDisabled = ({ bool }) => (buttonIsDisabled = {bool} );

  const checkInventory = () => (
    inventory > 0 ? setButtonDisabled(false) : setButtonDisabled(true)
  );
    checkInventory();
    var tempButton;
    if(buttonIsDisabled === false) {
      tempButton =
              <button
                {...PrimaryButtonStyle.HoverButton}
                onMouseEnter={ () => ( setButtonHovered(true) ) }
                onMouseLeave={ () => setButtonHovered(false) }
                className={ buttonIsHovered ? 'hover' : null}
                onClick={ onAddToCartClicked }
                >
                Add
              </button>
    }
    if(buttonIsDisabled === true){
      tempButton = <button
        {...PrimaryButtonStyle.HoverButton}
        onMouseEnter={ () => ( setButtonHovered(true) ) }
        onMouseLeave={ () => setButtonHovered(false) }
        className={ buttonIsHovered ? 'hover' : null}
        onClick={ onAddToCartClicked }
        >
        Sold
      </button>
    }

  return(
    <div>
      {tempButton}
    </div>
  )
}

PrimaryButton.propTypes = {
  inventory: PropTypes.number,
  onAddToCartClicked: PropTypes.func.isRequired
}
export default PrimaryButton

/*
  if(buttonIsDisabled){
        'DISABLED'
      }
      else {
        if(inventory > 0){ return 'Add to cart'}
        else {setButtonDisabled(true)}
      }
*/
