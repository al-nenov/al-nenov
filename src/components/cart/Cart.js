import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {removeFromCart, emptyCart} from '../../redux/cartReducer';
import CartTotals from './CartTotals';
import CartItem from './CartItem';
import {Table, Button, Row, Col} from 'react-bootstrap';



function Cart(props) {
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
        let total = 0
        props.cart.forEach(item => {
            total += item.price * item.qty
        })
        setCartTotal(total)
    }, [props.cart])


    function handleEmptyCart() {
        props.emptyCart()
    }

    const cartItems = props.cart.map(item => {
        return <CartItem  key={item.id} item={item}/>        
    });
    
    return (
        <>
            <h3 className="py-3">Cart page</h3>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                    {cartItems}
                </thead>
            </Table>
            <Row>
                <Col>
                    {cartItems.length > 0 && <Button variant="outline-secondary" onClick={handleEmptyCart}>Empty cart</Button>}                    
                </Col>
                <Col>
                    <CartTotals total={cartTotal} />                    
                </Col>
            </Row>
        </>
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