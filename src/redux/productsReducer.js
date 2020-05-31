import Products from '../products/products.json';

const initalState = {
    products: Products
}

export function addProduct(product) {
    console.log(product)
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

const productsReducer = (state = initalState.products, action) => {
    switch (action.type) {
        case "ADD_PRODUCT": 
            return [...state, action.payload]      
        default:
            return state;    
    }
}

export default productsReducer;