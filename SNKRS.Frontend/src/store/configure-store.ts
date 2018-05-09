// import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import pageReducer from '@src/reducers/page';
import settingsReducer from '@src/reducers/settings';
// import fetchPageEpic from '@src/epics/page';
// import scrollEpic from '@src/epics/scroll';
import scrollReducer from '@src/reducers/scroll';

// const epicMiddleware = createEpicMiddleware(combineEpics(fetchPageEpic));

let composeEnhancers: any;

if (typeof window !== 'undefined') {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

const configureStore = (initialState: any) => {
    const store = createStore(
        combineReducers({
            settings: settingsReducer,
            page: pageReducer
        }),
        initialState,
        // composeEnhancers(applyMiddleware(epicMiddleware))
    );

    return store;
};

export default configureStore;
