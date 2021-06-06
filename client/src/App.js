import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//action = {type: '', payload: ''}
const defaultState = {
  isAuth: false,
  user: {
    id: '',
    name: '',
    surname: '',
    mail: '',
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_AUTH":
      return {...state, isAuth: true}
    case "USER_LEAVE":
      return {...state, isAuth: false}
    case "LOAD_USER_INFO":
      return {...state, user: action.user}
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
