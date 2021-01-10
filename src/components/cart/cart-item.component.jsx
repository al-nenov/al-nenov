import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductPrice from '../product/product-price.component'
import { Figure, NavLink } from 'react-bootstrap'
import { removeFromCart } from '../../redux/cart/cart.actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {
    const { id, image, title, qty, price } = item
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(removeFromCart(id))
    }

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
            <td>
                <NavLink onClick={() => handleClick(id)}>
                    <FontAwesomeIcon icon="times" />
                </NavLink>
            </td>
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

CartItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default CartItem
