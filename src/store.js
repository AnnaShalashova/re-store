import { legacy_createStore as createStore} from 'redux';

import reducer from './reducers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({
            type: action
        })
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware(thunk, stringMiddleware));

export default store;