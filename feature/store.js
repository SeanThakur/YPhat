import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import rootReducer from './rootreducer';

const initialState = {}

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    // typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store