import React, { useState } from 'react'
import data from './components/back/data/data'
import Header from './components/front/header/header'
import Routes from './components/front/routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([])

  const handelAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id 
          ? { ...ProductExist, quantity: ProductExist.quantity + 1 } 
          : item)
      );
    }else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  };

  const handelRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id 
        ? { ...ProductExist, quantity: ProductExist.quantity - 1 } 
        : item
        )
      );
    }
  };

  const handelCartClearence = () => {
    setCartItems([])
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes 
          productItems={productItems}
          cartItems={cartItems}
          handelAddProduct={handelAddProduct}
          handelRemoveProduct={handelRemoveProduct}
          handelCartClearence={handelCartClearence} />
      </Router>
    </div>
  )
}

export default App
