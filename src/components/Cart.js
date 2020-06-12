import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {removeFromCart, emptyCart} from '../redux/cartReducer';
import ProductPrice from './product/ProductPrice';
import CartTotals from './CartTotals';
import {Table, Figure, NavLink, Button, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Cart(props) {
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
        let total = 0
        props.cart.map((item) => {
            total += item.price * item.qty
        })
        setCartTotal(total)
    }, [props.cart])

    function handleClick(id) {
        props.removeFromCart(id)
    }

    function handleEmptyCart() {
        props.emptyCart()
    }

    const cartItems = props.cart.map(item => {
        const productItem = 
        <a href={`product/${item.id}`}>
            <Figure className="mx-2">
                <Figure.Image
                    width={50}
                    src={'/images/products/' + item.image}
                    fluid={true}
                />
            </Figure>
            {item.title}
        </a>
        return (
            <tr key={item.id}>
                <td><NavLink onClick={() => handleClick(item.id)}><FontAwesomeIcon icon="times"/></NavLink></td>
                <td>{item.id}</td>
                <td>{productItem}</td>
                <td><ProductPrice price={item.price} /></td>
                <td>{item.qty}</td>
                <td><ProductPrice price={item.price * item.qty} /></td>
            </tr>
        )
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