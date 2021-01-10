import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import FavoriteItem from './favorite-item.component'

const FavoritesList = () => {
    const favoritesList = useSelector((state) => state.favorites)
    const products = useSelector((state) => state.products.allProducts)

    const favorites = favoritesList.map((item) => (
        <FavoriteItem key={item} item={products.find((product) => product.id === item)} />
    ))
    return (
        <>
            <h3 className="py-3">Your favorites</h3>
            <Table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                    {favorites}
                </tbody>
            </Table>
        </>
    )
}

export default FavoritesList
