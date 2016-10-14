import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import * as config from './config';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: config.FIREBASE_API_KEY,
      authDomain: config.FIREBASE_AUTH_DOMAIN,
      databaseURL: config.FIREBASE_DATABASE_URL,
      storageBucket: config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
