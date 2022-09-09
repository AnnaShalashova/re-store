const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (item = {}, book, country) => {
    
    const { id = book.id, title = book.title, count = 0, total = 0 } = item;

    return {
        id,
        title,
        count: count + country,
        total: total + book.price * country
    }
}

const updateOrder = (state, bookId, country) => {
    const { shoppingCart: {cartItems}, bookList: { books } } = state;
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    const book = books.find(({id}) => id === bookId);
    let newItem = updateCartItem(item, book, country);

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
}

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
        }
    }
    switch (action.type) {

        case "ON_ADDED_TO_CART":

            return updateOrder(state, action.payload, 1);

        case "ON_DECREASE":

           return updateOrder(state, action.payload, -1);
            
        case "ON_DELETE":
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state.shoppingCart;
    }
}

export default updateShoppingCart;