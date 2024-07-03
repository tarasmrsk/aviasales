import { createStore, combineReducers } from 'redux'

import { sortReducer }  from './sortReducer'
import { filtersReducer }  from './filtersReducer'
import { ticketsReducer } from './ticketsReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filtersReducer,
  tickets: ticketsReducer
})

const store = createStore(rootReducer)

export default store



// import { createStore, combineReducers, applyMiddleware, compose } from 'redux' // Добавляем compose
// import thunk from 'redux-thunk'

// import { sortReducer } from './sortReducer'
// import { filtersReducer } from './filtersReducer'
// import { ticketsReducer } from './ticketsReducer'

// const rootReducer = combineReducers({
//   sort: sortReducer,
//   filter: filtersReducer,
//   tickets: ticketsReducer
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // Добавляем composeEnhancers

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk)) // Используем composeEnhancers
// )

// export default store


// import { createStore, combineReducers, applyMiddleware } from 'redux'
// // eslint-disable-next-line import/no-unresolved
// import { composeWithDevTools } from 'redux-devtools-extension' // Импортируем composeWithDevTools из redux-devtools-extension
// import thunk from 'redux-thunk'

// import { sortReducer } from './sortReducer'
// import { filtersReducer } from './filtersReducer'
// import { ticketsReducer } from './ticketsReducer'

// const rootReducer = combineReducers({
//   sort: sortReducer,
//   filter: filtersReducer,
//   tickets: ticketsReducer
// })

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)) // Используем composeWithDevTools для подключения Redux DevTools
// )

// export default store