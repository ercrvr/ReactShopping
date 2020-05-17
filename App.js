import * as React from 'react';



import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import AppContainer from './components/AppContainer';
import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
    
  );
}

