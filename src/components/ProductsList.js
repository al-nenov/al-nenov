
import React from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';

import Product from './Product';

function ProductsList(props) {
    const products = props.allProducts.map((product) => {
        return (
            <Product key={product.id} {...product} />
        )
    })

    return (
        <Container>
            <Row className="justify-content-center">
                { products }
            </Row>
        </Container>
    )
}
function mapStateToProps(globalState) {
    return {
        allProducts: globalState.products
    }
}

export default connect(mapStateToProps, {})(ProductsList);