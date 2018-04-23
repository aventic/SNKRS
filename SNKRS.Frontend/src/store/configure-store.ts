import { createStore, combineReducers, compose } from 'redux';
import page from '@src/reducers/page';
import settings from '@src/reducers/settings';

let composeEnhancers: any;

if (typeof window !== 'undefined') {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

const configureStore = (initialState: any) => {
    const store = createStore(
        combineReducers({
            settings,
            page
        }),
        initialState,
        composeEnhancers()
    );

    return store;
};

export default configureStore;