import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga(){
    
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        plantList,
        boxList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));


// ReactDOM.render(<App />, document.getElementById('react-root'));
