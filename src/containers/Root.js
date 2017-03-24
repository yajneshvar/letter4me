import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import QuoteApp from './QuoteApp';

const store = configureStore({data: {contents: {quotes:[{quote: "Yaj is awesome", author: "yaj"}]}}, isFetching: false});
export default class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <QuoteApp/>
      </Provider>
    )
  }
}
