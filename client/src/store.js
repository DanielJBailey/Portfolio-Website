import { createStore, compose, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const enhancers = compose(
    applyMiddleware(thunk)
  )

const Store = createStore(rootReducer, {}, enhancers);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    Store.replaceReducer(nextRootReducer);
  });
}

export default Store;