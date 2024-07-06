import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'

import { sortReducer }  from './sortReducer'
import { filtersReducer }  from './filtersReducer'
import { ticketsReducer } from './ticketsReducer'
import { moreticketReducer } from './moreticketReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filtersReducer,
  id: ticketsReducer,
  more: moreticketReducer
})

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
