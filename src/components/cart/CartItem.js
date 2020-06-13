import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ProductPrice from '../product/ProductPrice';
import {Figure, NavLink} from 'react-bootstrap';
import {removeFromCart} from '../../redux/cartReducer';
import {useDispatch} from 'react-redux';

function CartItem(props) {
    const dispatch = useDispatch();

    function handleClick(id) {
        dispatch(removeFromCart(id))
    }
    const productItem = 
        <a href={`product/${props.item.id}`}>
            <Figure className="mx-2">
                <Figure.Image
                    width={50}
                    src={'/images/products/' + props.item.image}
                    fluid={true}
                />
            </Figure>
            {props.item.title}
        </a>

    return (
        <tr>
            <td><NavLink onClick={() => handleClick(props.item.id)}><FontAwesomeIcon icon="times"/></NavLink></td>
            <td>{props.item.id}</td>
            <td>{productItem}</td>
            <td><ProductPrice price={props.item.price} /></td>
            <td>{props.item.qty}</td>
            <td><ProductPrice price={props.item.price * props.item.qty} /></td>
        </tr>
    )

}

export default CartItem