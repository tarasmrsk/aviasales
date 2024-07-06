const SET_ALL_VALUE = 'SET_ALL_VALUE'
const SET_NONE_VALUE = 'SET_NONE_VALUE'
const SET_ONE_VALUE = 'SET_ONE_VALUE'
const SET_TWO_VALUE = 'SET_TWO_VALUE'
const SET_THREE_VALUE = 'SET_THREE_VALUE'

export const setAllValue = (filters) => ({ 
  type: SET_ALL_VALUE,
  payload: filters
})
export const setNoneValue = (filters) => ({ 
  type: SET_NONE_VALUE,
  payload: filters
})
export const setOneValue = (filters) => ({ 
  type: SET_ONE_VALUE,
  payload: filters
})
export const setTwoValue = (filters) => ({ 
  type: SET_TWO_VALUE,
  payload: filters
})
export const setThreeValue = (filters) => ({
  type: SET_THREE_VALUE,
  payload: filters
})

const initialState = {
  all: true,
  noneStop: true,
  oneStop: true,
  twoStops: true,
  threeStops: true,
}

// eslint-disable-next-line default-param-last
export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_ALL_VALUE:
    return action.payload
  case SET_NONE_VALUE:
    return action.payload
  case SET_ONE_VALUE:
    return action.payload
  case SET_TWO_VALUE:
    return action.payload
  case SET_THREE_VALUE:
    return action.payload
  default:
    return state
  }
}
