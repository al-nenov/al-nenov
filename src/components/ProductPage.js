import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import {addToCart} from '../redux/cartReducer';
import {toast} from 'react-toastify';

function ProductPage(props) {
    const productId = parseInt(props.match.params.id);
    const product = props.products.find(product => product.id === productId)

    if(!product) {
        return <Redirect to="/404" />
    }
    function handleClick() {
        toast('Product was added to your cart')
        props.addToCart(product)
    }
    return (
            <Card>             
                <Card.Img variant="top" style={{"maxWidth":"300px"}} src={'/images/products/' + product.image} />
                <Card.Body>
                <Card.Title>{product.description}</Card.Title>

                <Card.Text>
                    Price: {product.price}
                </Card.Text>
                <Card.Text>
                    Color: {product.color}
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>
                        add to cart
                </Button>
                </Card.Body>
            </Card>         
    )
}
function mapStateToProps(globalState) {
    return {
        products: globalState.products.allProducts,
        cart: globalState.cart
    }
}

export default connect(mapStateToProps, {addToCart})(ProductPage);