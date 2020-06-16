import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {emptyCart} from '../../actions/cartActions';
import CartTotals from './CartTotals';
import CartItem from './CartItem';
import {Table, Button, Row, Col} from 'react-bootstrap';



function Cart() {
    const [cartTotal, setCartTotal] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    


    useEffect(() => {
        let total = 0
        cart.forEach(item => {
            total += item.price * item.qty
        })
        setCartTotal(total)
    }, [cart])

    if (!cart.length) {
        return <Redirect to="/" />
    }

    function handleEmptyCart() {
        dispatch(emptyCart())
    }

    const cartItems = cart.map(item => {
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
                    <Button variant="outline-secondary" onClick={handleEmptyCart}>Empty cart</Button>
                </Col>
                <Col>
                    <CartTotals total={cartTotal} items={cart} />                    
                </Col>
            </Row>
        </>
    )
}

export default Cart;