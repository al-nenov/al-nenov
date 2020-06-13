
import React, {useState} from 'react';
import {Row} from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import {connect} from 'react-redux';

import Product from './Product';


function ProductsList(props) {
    const itemsPerPage = 6;
    const [activePage, setActivePage] = useState(1);
    const [activeProducts, setActiveProducts] = useState(getCurrentProducts(0,itemsPerPage))

    function getCurrentProducts(firstProduct, lastProduct) {
        return props.allProducts.slice(firstProduct, lastProduct)
    }

    const products = activeProducts.map((product) => {
        return (
            <Product key={product.id} {...product} />
        )
    })


    function handlePageChange(pageNumber) {
        setActivePage(pageNumber);
        const lastProduct = pageNumber * itemsPerPage;
        const firstProduct = lastProduct - itemsPerPage;
        setActiveProducts(getCurrentProducts(firstProduct, lastProduct))
    }

    return (
        <>
            <Row className="justify-content-center products">
                {products}
            </Row>
            <Pagination
                activePage = {activePage}
                itemClass="page-item"
                linkClass="page-link"
                itemsCountPerPage = {itemsPerPage}
                totalItemsCount = {props.allProducts.length}
                pageRangeDisplayed = {5}
                onChange={handlePageChange}
            />
        </>
    )
}
function mapStateToProps(globalState) {
    return {
        allProducts: globalState.products.allProducts
    }
}

export default connect(mapStateToProps, {})(ProductsList);