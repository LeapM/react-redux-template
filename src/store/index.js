import {createStore, applyMiddleware}  from "redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'
import rootReducer from 'reducers' 


const configureStore = () => {
    let middleware;
    let store;
    let initState;
    let sagaMiddleware = createSagaMiddleware();
    if(process.env.NODE_ENV == 'production'){
        middleware = applyMiddleware(sagaMiddleware)
        store = createStore(rootReducer,initState,middleware)
    } else {
        middleware = applyMiddleware(sagaMiddleware)
        store = createStore(rootReducer,initState,middleware)
    }
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore();