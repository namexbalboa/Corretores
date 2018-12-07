import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/Preload';

console.disableYellowBox = true; 

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  },
});

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Navegador/>
      </Provider>
    );
  }
}