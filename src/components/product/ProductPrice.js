import React from 'react';
import PropTypes from 'prop-types';

function ProductPrice(props) {
    const price = (props.price).toFixed(2);
    const currency = props.currency || 'лв.';

    return (
        <span className="product-price">{price} <span className="product-price-currency">{currency}</span></span>
    )
}

ProductPrice.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string
}
export default ProductPrice