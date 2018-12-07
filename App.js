import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Home from './src/screens/default/Home';
import Preload from './src/Preload';

console.disableYellowBox = true; 

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  },
  Home:{
    screen:Home,
    navigationOptions:{ header:null }
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