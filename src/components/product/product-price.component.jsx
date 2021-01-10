import React from 'react'
import PropTypes from 'prop-types'

const ProductPrice = ({ price, currency = 'лв.' }) => {
    price = price.toFixed(2)

    return (
        <span className="product-price">
            {price} <span className="product-price-currency">{currency}</span>
        </span>
    )
}

ProductPrice.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string
}
export default ProductPrice
