import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const stripePublishableKey = process.env.REACT_APP_STRIPE_KEY

    const onToken = (token) => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="React Shop"
            billingAddress
            shippingAddress
            description={`Your totals is ${price} лв.`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={stripePublishableKey}
        />
    )
}

export default StripeCheckoutButton
