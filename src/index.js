import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga() {
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('SEARCH_GIFS', searchGifs);
    yield takeEvery('SET_CATEGORY', setCategory)
}

function* addFavorite(action) {
    try {
        yield axios.post('/api/favorite', action.payload);
        const nextAction = { type: 'FETCH_FAVORITE' };
        yield put(nextAction);
    } catch (error) {
        console.log('There is error in POST', error);
    }
}

// Sends an axios request to route GET /api/favorite 
function* fetchFavorites(action) {
    try {
        const favorites = yield axios.get('/api/favorite');
        const nextAction = { type: 'SET_FAVORITES', payload: favorites }
        yield put(nextAction);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

function* setCategory(action) {
    try {
        // TODO: Implement axios.put
        const category = yield axios.put;
        const nextAction = { type: 'FETCH_FAVORITE' };
        yield put(nextAction);
    } catch (error) {
        console.log(error);
        alert(error);
    } 
}

// Sends an axios request to route GET /api/search
function* searchGifs(action) {
    console.log(action);
    try {
        const searchResult = yield axios.get(`/api/search?q=${action.payload}`);
        const nextAction = { type: 'SET_SEARCH_RESULT', payload: searchResult }
        yield put(nextAction);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

//reducer- holds redux state based on action type
const favoriteReducer = (state = [], action) => {
    console.log('in favoriteReducer', action.payload);
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

//reducer- holds redux state of search results
const searchReducer = (state = [], action) => {
    console.log('in searchReducer', action.payload);
    switch (action.type) {
        case 'SET_SEARCH_RESULT':
            return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        favoriteReducer,
        searchReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));


// ReactDOM.render(<App />, document.getElementById('react-root'));
