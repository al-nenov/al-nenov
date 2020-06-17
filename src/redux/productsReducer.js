import Products from '../products/products.json';

const initalState = {
    allProducts: Products,
}


const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        default:
            return state;    
    }
}

export {productsReducer};