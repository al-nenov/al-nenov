import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddToCart from '../cart/AddToCart';
import ProductPrice from './ProductPrice';
import AddToFavorites from '../AddToFavorites';
 
function Product(props) {
    return (
        <Col md={4} sm={'auto'} className="product mb-5">
            <Card>
                {props.loggedIn && <AddToFavorites product={props.id}/> }
                <Link to={`product/${props.id}`}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/' + props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            Color: {props.color}
                        </Card.Text>
                        <Card.Text>
                            Price: <ProductPrice price={props.price} />
                        </Card.Text>
                    </Card.Body>
                </Link>
                <AddToCart product={props} />
            </Card>            
        </Col>
    )
}
function mapStateToProps(globalState) {
    return {
        loggedIn: globalState.userAuth.loggedIn,
    }
}
Product.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.number.isRequired
}

export default connect(mapStateToProps, {})(Product);