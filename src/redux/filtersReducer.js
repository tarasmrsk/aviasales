const SET_FILTERS = 'SET_FILTERS'

// eslint-disable-next-line import/prefer-default-export
export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
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
  case SET_FILTERS:
    return action.payload
  default:
    return state
  }
}