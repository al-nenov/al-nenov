import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart, emptyCart} from '../redux/cartReducer';


function Cart(props) {

    function handleClick(id) {
        props.removeFromCart(id)
    }

    function handleEmptyCart() {
        props.emptyCart()
    }

    const cartItems = props.cart.map(item => {
        return (
            <div key={item.id}>
                <a className="card"  href={`product/${item.id}`}> 
                    id: {item.id} <br />
                    qty: {item.qty} <br />
                    price: {item.price}
                </a>
                <span onClick={() => handleClick(item.id)}>Remove from cart</span>
            </div>
        )
    });
    
    return (
            <div className="cartPage">
                Cart page
                {cartItems}
                {cartItems.length > 0 && <p onClick={handleEmptyCart}>Empty cart</p>}
            </div>
    )
}
function mapStateToProps(globalState) {
    return {
        cart: globalState.cart
    }
}
const mapPropsToDispatch = {
    removeFromCart,
    emptyCart
}

export default connect(mapStateToProps, mapPropsToDispatch)(Cart);