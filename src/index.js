import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer'
import { createStore } from "redux";
import { Provider } from "react-redux"
import 'bulma/css/bulma.css';
import './styles.scss';

// I guess were creating the store here cause we need to wrap the APP component

//2: ✔️ Set up store and Provider

//Create Store
const store = createStore(reducer)

const rootElement = document.getElementById('root');
//Wrap Provider inside App
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
     rootElement);
