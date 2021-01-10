import React from 'react'
import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Row, Col, Figure } from 'react-bootstrap'
import AddToCart from './add-to-cart.component'
import AddToFavorites from '../../components/favorites/add-to-favorites.component'
import ProductPrice from './product-price.component'

const ProductPage = ({ products, match }) => {
    const productId = parseInt(match.params.id)
    const product = products.find((product) => product.id === productId)
    const loggedIn = useSelector((state) => state.userAuth.currentUser)
    const { image, title, description, price, color, id } = product

    if (!product) {
        return <Redirect to="/not-found" />
    }

    return (
        <Row>
            <Col md={6} sl={'auto'}>
                <Figure>
                    <Figure.Image
                        src={process.env.PUBLIC_URL + '/images/products/' + image}
                        fluid={true}
                    />
                </Figure>
            </Col>

            <Col md={6} sl={'auto'}>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>
                            Price: <ProductPrice price={price} />
                        </Card.Text>
                        <Card.Text>Color: {color}</Card.Text>
                        <AddToCart product={product} />
                    </Card.Body>
                    {loggedIn ? <AddToFavorites productId={id} /> : null}
                </Card>
            </Col>
        </Row>
    )
}
const mapStateToProps = (globalState) => ({
    products: globalState.products.allProducts,
    cart: globalState.cart
})

ProductPage.propTypes = {
    products: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(ProductPage)
