const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
};

const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
};

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
}


const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

const onAddedToCart = (bookId) => {
    return {
        type: "ON_ADDED_TO_CART",
        payload: bookId
    }
}

const onDecrease = (bookId) => {
    return {
        type: "ON_DECREASE",
        payload: bookId
    }
}

const onDelete = (bookId) => {
    return {
        type: "ON_DELETE",
        payload: bookId
    }
}

export {
    fetchBooks,
    onAddedToCart,
    onDecrease,
    onDelete
}