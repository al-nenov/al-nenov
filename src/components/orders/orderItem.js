import React from 'react';
import PropTypes from 'prop-types';
import ProductPrice from '../product/ProductPrice';
import {Figure} from 'react-bootstrap';

function OrderItem(props) {
    const productItem = (
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
    )
    return (

        <tr>
            <td>{props.item.id}</td>
            <td>{productItem}</td>
            <td><ProductPrice price={props.item.price} /></td>
            <td>{props.item.qty}</td>
            <td><ProductPrice price={props.item.price * props.item.qty} /></td>
        </tr>
    )
}

OrderItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default OrderItem
