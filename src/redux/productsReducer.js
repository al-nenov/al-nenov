import Products from '../products/products.json';

const initalState = {
    allProducts: Products,
    product: {}
}

function addProduct(product) {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
 function returnProduct(id) {
     return {
         type: "GET_PRODUCT_BY_ID",
         payload: id
     }
 }


const productsReducer = (state = initalState, action) => {
    switch (action.type) {

        default:
            return state;    
    }
}



export {addProduct, returnProduct, productsReducer};