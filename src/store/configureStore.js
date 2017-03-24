import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import  logger   from 'redux-logger'

const loggerMiddleware = logger();
export default function configureStore(preloadedState){
  console.log(logger);
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk,
    loggerMiddleware)
  )
}
