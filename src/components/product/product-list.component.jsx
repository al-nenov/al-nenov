import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import Pagination from '@material-ui/lab/Pagination'

import Product from './product-item.component'

import { startFetchingProducts } from '../../redux/products/products.actions'

const ProductsList = ({ allProducts, fetchProducts, isLoading }) => {
    const itemsPerPage = 6
    const [activePage, setActivePage] = useState(1)
    const [activeProducts, setActiveProducts] = useState({
        firstProduct: 0,
        lastProduct: itemsPerPage
    })

    useEffect(() => {
        fetchProducts()
    }, [])

    function getCurrentProducts() {
        return allProducts.slice(activeProducts.firstProduct, activeProducts.lastProduct)
    }

    const products = getCurrentProducts().map((product) => {
        return <Product key={product.id} {...product} />
    })

    const handlePageChange = (ev, pageNumber) => {
        setActivePage(pageNumber)
        const lastProduct = pageNumber * itemsPerPage
        const firstProduct = lastProduct - itemsPerPage
        setActiveProducts({firstProduct, lastProduct})
    }

    return (
        <>
            <Row className="justify-content-center products">{isLoading ? 'Loading...' : products}</Row>
            <Pagination
                color="primary"
                page={activePage}
                count={allProducts.length / itemsPerPage}
                onChange={handlePageChange}
            />
        </>
    )
}
const mapStateToProps = (globalState) => ({
    allProducts: globalState.products.allProducts,
    isLoading: globalState.products.isLoading
})
const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(startFetchingProducts())
})
ProductsList.propTypes = {
    allProducts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
