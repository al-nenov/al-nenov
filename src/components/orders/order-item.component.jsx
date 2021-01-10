import React from 'react'
import PropTypes from 'prop-types'
import ProductPrice from '../product/product-price.component'
import { Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderItem = ({ item: { id, image, title, price, qty } }) => {
    const productItem = (
        <Link to={`product/${id}`}>
            <Figure className="mx-2">
                <Figure.Image
                    width={50}
                    src={process.env.PUBLIC_URL + '/images/products/' + image}
                    fluid={true}
                />
            </Figure>
            {title}
        </Link>
    )
    return (
        <tr>
            <td>{id}</td>
            <td>{productItem}</td>
            <td>
                <ProductPrice price={price} />
            </td>
            <td>{qty}</td>
            <td>
                <ProductPrice price={price * qty} />
            </td>
        </tr>
    )
}

OrderItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default OrderItem
