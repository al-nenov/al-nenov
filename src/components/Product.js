import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

function Product(props) {
    return (
        <Col md="auto">
            <Card style={{ width: '18rem' }}>             
                <Card.Img variant="top" src={'/images/products/' + props.image} />
                <Card.Body>
                {/* <Card.Title>{product.description}</Card.Title> */}
                {props.loggedIn && <p>Add to favorite</p>}
                <Card.Text>
                    Price: {props.price}
                </Card.Text>
                <Card.Text>
                    Color: {props.color}
                </Card.Text>
                <Button variant="primary" href={`product/${props.id}`}>
                        Go somewhere
                </Button>
                </Card.Body>
            </Card>            
        </Col>
    )
}
function mapStateToProps(globalState) {
    return {
        loggedIn: globalState.userAuth.loggedIn
    }
}

export default connect(mapStateToProps, {})(Product);