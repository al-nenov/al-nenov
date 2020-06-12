
import React from 'react';
import {Row} from 'react-bootstrap';
import {connect} from 'react-redux';

import Product from './Product';

function ProductsList(props) {
    const products = props.allProducts.map((product) => {
        return (
            <Product key={product.id} {...product} />
        )
    })

    return (
        <Row className="justify-content-center products">
            { products }
        </Row>
    )
}
function mapStateToProps(globalState) {
    return {
        allProducts: globalState.products.allProducts
    }
}

export default connect(mapStateToProps, {})(ProductsList);