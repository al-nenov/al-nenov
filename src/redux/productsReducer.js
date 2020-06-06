import Products from '../products/products.json';

const initalState = {
    allProducts: Products,
    product: {}
}

export function addProduct(product) {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
 export function returnProduct(id) {
     return {
         type: "GET_PRODUCT_BY_ID",
         payload: id
     }
 }


const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT": 
            return [...state, action.payload]  
        case "GET_PRODUCT_BY_ID":
            const filteredProduct = state.allProducts.filter((product) => product.id == action.payload)
            console.log(filteredProduct)
            return {
                 ...state,
                 product: {"trtr": 12}
            }
        default:
            return state;    
    }
}



export default productsReducer;