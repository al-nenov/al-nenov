const cart = [];

function addToCart(product) {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload: product
    }
}

function removeFromCart(id) {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: id
    }
}

function emptyCart() {
    return {
        type: "EMPTY_CART"
    }
}

const cartReducer = function(state = cart, action) {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART": {
            let product = {...action.payload};
            const cartItems = [...state];
            const existingItem = cartItems.find(item => item.id === product.id)

            if (existingItem) {
                existingItem.qty +=1;
                return [...cartItems]
            } else {
                product.qty = 1;
                return [...cartItems, product];
            }           
        }
        case "REMOVE_ITEM_FROM_CART": {
            const cartItems = [...state];
            const reducedCart = cartItems.filter(item => item.id !== action.payload);
            return reducedCart;
        }

        case "EMPTY_CART": {
            return []
        }
        default: return state
    }
}

export {addToCart, removeFromCart, emptyCart, cartReducer}