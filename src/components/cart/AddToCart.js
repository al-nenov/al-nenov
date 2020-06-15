import React from 'react';
import {Button} from 'react-bootstrap';
import {addToCart} from '../../actions/cartActions';
import {useDispatch} from 'react-redux';

function AddToCart(props) {
    const dispatch = useDispatch()
    function handleClick() {
        dispatch(addToCart(props.product))
    }

    return (
        <div className="add-to-cart mx-auto my-2">
            <Button variant="primary btn-lg" onClick={handleClick}>
                Add to cart
            </Button>
        </div>
    )


}

export default AddToCart