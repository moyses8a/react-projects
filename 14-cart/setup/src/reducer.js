const reducer = (state, action) => {
    const toogleAmount = (id, amount) => state.cart.map((item) => {
        if (item.id === id) return { ...item, amount: item.amount + amount };
        return item;
    })
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload ) }
    }
    if (action.type === 'INCREASE') {
        const tempCart = toogleAmount(action.payload, 1)
        return {
            ...state,
            cart: tempCart
        }
    }
    if (action.type === 'DECREASE') {
        const tempCart = toogleAmount(action.payload, -1).filter(cartItem => cartItem.amount !== 0)
        return {
            ...state,
            cart: tempCart
        }
    }
    if (action.type === 'GET_TOTALS') {
        let {total, amount} = state.cart.reduce((totalCart, item) => {
            const {price, amount} = item;
            totalCart.total += (amount * price);
            totalCart.amount += amount;
            return totalCart;
        }, { total: 0, amount: 0 })
        total = parseFloat(total.toFixed(2));
        return {
            ...state,
            total,
            amount
        }
    }
    if (action.type === 'LOADING') {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return {
            ...state,
            cart: action.payload,
            loading: false
        }
    }
    throw new Error('No matching action type');
}

export default reducer;