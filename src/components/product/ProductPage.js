import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Card, Container, Row, Col, Figure} from 'react-bootstrap';
import AddToCart from '../AddToCart';
import ProductPrice from './ProductPrice';

function ProductPage(props) {
    const productId = parseInt(props.match.params.id);
    const product = props.products.find(product => product.id === productId)

    if(!product) {
        return <Redirect to="/not-found" />
    }

    return (
            <Container>
                <Row>
                    <Col md={6} sl={'auto'}>
                        <Figure>
                            <Figure.Image 
                                src={'/images/products/' + product.image}
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

            </Container>
    )
}
function mapStateToProps(globalState) {
    return {
        products: globalState.products.allProducts,
        cart: globalState.cart
    }
}

export default connect(mapStateToProps)(ProductPage);