import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';

export default function Product(props) {
    return (
        <Col md="auto">
            <Card style={{ width: '18rem' }}>             
                <Card.Img variant="top" src={'/images/products/' + props.image} />
                <Card.Body>
                {/* <Card.Title>{product.description}</Card.Title> */}
                <Card.Text>
                    Price: {props.price}
                </Card.Text>
                <Card.Text>
                    Color: {props.color}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>            
        </Col>
    )
}