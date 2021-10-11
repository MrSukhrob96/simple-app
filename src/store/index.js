import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

const middleware = [thunk]

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

console.log(store.getState());


export default store;