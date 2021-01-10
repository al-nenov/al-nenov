import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import Pagination from '@material-ui/lab/Pagination'

import Product from './product-item.component'

const ProductsList = ({ allProducts }) => {
    const itemsPerPage = 6
    const [activePage, setActivePage] = useState(1)
    const [activeProducts, setActiveProducts] = useState(getCurrentProducts(0, itemsPerPage))

    function getCurrentProducts(firstProduct, lastProduct) {
        return allProducts.slice(firstProduct, lastProduct)
    }

    const products = activeProducts.map((product) => {
        return <Product key={product.id} {...product} />
    })

    const handlePageChange = (ev, pageNumber) => {
        setActivePage(pageNumber)
        const lastProduct = pageNumber * itemsPerPage
        const firstProduct = lastProduct - itemsPerPage
        setActiveProducts(getCurrentProducts(firstProduct, lastProduct))
    }

    return (
        <>
            <Row className="justify-content-center products">{products}</Row>
            <Pagination
                color="primary"
                page={activePage}
                count={allProducts.length / itemsPerPage}
                onChange={handlePageChange}
            />
        </>
    )
}
const mapStateToProps = (globalState) => ({ allProducts: globalState.products.allProducts })

ProductsList.propTypes = {
    allProducts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {})(ProductsList)
