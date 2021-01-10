export const addToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find((item) => item.id === itemToAdd.id)

    if (existingItem) {
        return cartItems.map((item) => {
            return item.id === existingItem.id ? { ...item, qty: (item.qty += 1) } : item
        })
    } else {
        return [...cartItems, { ...itemToAdd, qty: 1 }]
    }
}

export const removeFromCart = (cartItems, id) => cartItems.filter((item) => item.id !== id)
