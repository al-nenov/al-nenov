import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col } from 'react-bootstrap'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddToCart from '../cart/add-to-cart.component'
import ProductPrice from './product-price.component'
import AddToFavorites from '../../components/favorites/add-to-favorites.component'

function Product(props) {
    const loggedIn = useSelector((state) => state.userAuth.currentUser)
    return (
        <Col md={4} sm={'auto'} className="product mb-5">
            <Card>
                {loggedIn ? <AddToFavorites product={props.id} /> : null}
                <Link to={`product/${props.id}`}>
                    <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + '/images/products/' + props.image}
                    />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>Color: {props.color}</Card.Text>
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

Product.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.number.isRequired
}

export default Product
