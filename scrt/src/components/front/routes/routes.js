import React from 'react'
import Products from '../products/products'
import SignUp from '../Signup/signup'
import Cart from '../Cart/cart'
import { Route, Switch } from 'react-router-dom'

const routes = ({
    productItems,
    cartItems,
    handelAddProduct,
    handelRemoveProduct,
    handelCartClearence
}) => {
    return (<div>
        <Switch>
            <Route path="/" exact>
                <Products 
                productItems={productItems} 
                handelAddProduct={handelAddProduct} />
            </Route>
            <Route path="/signup" exact>
                <SignUp />
            </Route>
            <Route path="/cart" exact>
                <Cart 
                    cartItems={cartItems}
                    handelAddProduct={handelAddProduct}
                    handelRemoveProduct={handelRemoveProduct}
                    handelCartClearence={handelCartClearence} />
            </Route>
        </Switch>
    </div>
    )
}

export default routes
