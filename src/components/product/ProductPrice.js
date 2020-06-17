import React from 'react';

function ProductPrice(props) {
    const price = (props.price).toFixed(2);
    const currency = props.currency || 'лв.';

    return (
        <span className="product-price">{price} <span className="product-price-currency">{currency}</span></span>
    )
}

export default ProductPrice