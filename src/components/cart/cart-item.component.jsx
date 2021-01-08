import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductPrice from '../product/product-price.component'
import { Figure, NavLink } from 'react-bootstrap'
import { removeFromCart } from '../../actions/cartActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function CartItem(props) {
    const dispatch = useDispatch()

    function handleClick(id) {
        dispatch(removeFromCart(id))
    }
    const productItem = (
        <Link to={`product/${props.item.id}`}>
            <Figure className="mx-2">
                <Figure.Image
                    width={50}
                    src={process.env.PUBLIC_URL + '/images/products/' + props.item.image}
                    fluid={true}
                />
            </Figure>
            {props.item.title}
        </Link>
    )

    return (
        <tr>
            <td>
                <NavLink onClick={() => handleClick(props.item.id)}>
                    <FontAwesomeIcon icon="times" />
                </NavLink>
            </td>
            <td>{props.item.id}</td>
            <td>{productItem}</td>
            <td>
                <ProductPrice price={props.item.price} />
            </td>
            <td>{props.item.qty}</td>
            <td>
                <ProductPrice price={props.item.price * props.item.qty} />
            </td>
        </tr>
    )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default CartItem
