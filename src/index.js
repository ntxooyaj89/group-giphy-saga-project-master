import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga(){
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
}

// Sends an axios request
// TODO: then update reducer SET_FAVORITES
function* fetchFavorites(action) {
    try {
        const favorites = yield axios.get('/api/favorites');
        // const nextAction = { type: 'SET_FAVORITES', payload: favorites }
        // yield put(nextAction);
    } catch (error) {
        console.log(error);
        alert(error);
    }

}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));


// ReactDOM.render(<App />, document.getElementById('react-root'));
