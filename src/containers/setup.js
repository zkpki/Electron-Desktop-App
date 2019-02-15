import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function configureStore(){
  const middleware = [
    thunk
  ];
  const enhancer = compose(
    applyMiddleware(
      ...middleware
    ),
  );
  const reducers = combineReducers(rootReducer);
  
  const store = createStore(reducers, enhancer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return { store }
}
  
export default configureStore;