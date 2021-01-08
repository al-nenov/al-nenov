import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Card, Row, Col, Figure} from 'react-bootstrap';
import AddToCart from '../cart/add-to-cart.component';
import ProductPrice from './product-price.component';

function ProductPage(props) {
    const productId = parseInt(props.match.params.id);
    const product = props.products.find(product => product.id === productId)

    if(!product) {
        return <Redirect to="/not-found" />
    }

    return (
        <Row>
            <Col md={6} sl={'auto'}>
                <Figure>
                    <Figure.Image 
                        src={process.env.PUBLIC_URL + '/images/products/' + product.image}
                        fluid={true}
                    />
                </Figure>
            </Col>

            <Col md={6} sl={'auto'}>
                <Card>             
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            Price: <ProductPrice price={product.price} />
                        </Card.Text>
                        <Card.Text>
                            Color: {product.color}
                        </Card.Text>
                        <AddToCart product={product} />
                    </Card.Body>
                </Card>         
            
            </Col>
        </Row>
    )
}
function mapStateToProps(globalState) {
    return {
        products: globalState.products.allProducts,
        cart: globalState.cart
    }
}

ProductPage.propTypes = {
    products: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(ProductPage);