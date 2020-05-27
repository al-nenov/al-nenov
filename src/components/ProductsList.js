
import React, {useState, useEffect} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import Products from '../products/products.json';

function ProductsList() {
    const [allProducts, setAllProducts] = useState([])
    
    useEffect(() => {
        setAllProducts(Products)
    }, [])
    
    const products = allProducts.map((product) => {
        return (
            <Col md="auto">
                <Card style={{ width: '18rem' }}>             
                    <Card.Img variant="top" src={'/images/products/' + product.image} />
                    <Card.Body>
                    {/* <Card.Title>{product.description}</Card.Title> */}
                    <Card.Text>
                        Price: {product.price}
                    </Card.Text>
                    <Card.Text>
                        Color: {product.color}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>            
            </Col>
        )
    })

    return (
            <section>
                <Row className="justify-content-center">
                    {products}
                </Row>
            </section>
    )
}

export default ProductsList;