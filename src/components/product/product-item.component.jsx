import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddToCart from './add-to-cart.component'
import ProductPrice from './product-price.component'
import AddToFavorites from '../../components/favorites/add-to-favorites.component'

const Product = (product) => {
    const { id, image, color, price, title } = product
    const loggedIn = useSelector((state) => state.userAuth.currentUser)
    return (
        <Col md={4} sm={'auto'} className="product mb-5">
            <Card>
                {loggedIn ? <AddToFavorites productId={id} /> : null}
                <Link to={`product/${id}`}>
                    <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + '/images/products/' + image}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Color: {color}</Card.Text>
                        <Card.Text>
                            Price: <ProductPrice price={price} />
                        </Card.Text>
                    </Card.Body>
                </Link>
                <AddToCart product={product} />
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
