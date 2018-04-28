import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const appStyle = {
  width: '90vw',
  margin: '5vw'
}

const App = () => {
  return(
    <div style={appStyle}>
        <h2>Acme Store</h2>
        <div> <CartContainer /></div>
      <hr/>
        <ProductsContainer />
      <hr/>
    </div>
  )
}

export default App
