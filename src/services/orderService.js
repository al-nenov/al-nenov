
import {USER} from './userService';

export const ORDER = {
    'COMPLETE_ORDER': completeOrder,
    'ORDERS_LIST': getOrders
}


async function completeOrder(items) {
    try {
        if (!items.length) {
            throw new Error('No items in cart')
        }

        if (!localStorage.user) {
            throw new Error('No user found')
        }
    } catch (err) {
        return {
            status: 'Failed',
            message: err.message
        };
    }

    const user = JSON.parse(localStorage.user);
    user.orders.push({
        id: user.orders.length + 1,
        items: [...items]
    })
    USER.UPDATE_USER(user);

    return {
        status: 'Success',
        user
    };
}

function getOrders() {
    return JSON.parse(localStorage.user).orders;
}