import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Card, Button, Col} from 'react-bootstrap';

function ProductPage(props) {
    const productId = parseInt(props.match.params.id);
    const product = props.products.find(product => product.id === productId)

    if(!product) {
        return <Redirect to="/404" />
    }
    return (
            <Card>             
                <Card.Img variant="top" style={{"max-width":"300px"}} src={'/images/products/' + product.image} />
                <Card.Body>
                <Card.Title>{product.description}</Card.Title>

                <Card.Text>
                    Price: {product.price}
                </Card.Text>
                <Card.Text>
                    Color: {product.color}
                </Card.Text>
                <Button variant="primary" >
                        add to cart
                </Button>
                </Card.Body>
            </Card>         
    )
}
function mapStateToProps(globalState) {
    return {
        products: globalState.products.allProducts
    }
}

export default connect(mapStateToProps, {})(ProductPage);