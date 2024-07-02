// import { createStore, combineReducers } from 'redux'

// import { sortReducer }  from './sortReducer'

// const rootReducer = combineReducers({
//   sort: sortReducer
// })

// const store = createStore(rootReducer)

// export default store


import { createStore, combineReducers } from 'redux'

import { sortReducer }  from './sortReducer'
import { filtersReducer }  from './filtersReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filtersReducer
})

const store = createStore(rootReducer)

export default store