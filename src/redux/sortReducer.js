const SORTED_BUTTON = {
  CHEAPEST: 'CHEAPEST',
  FASTED: 'FASTEST',
  OPTIMAL: 'OPTIMAL',
}

export const setCheapestValue = () => ({
  type: 'CHEAPEST'
})

export const setFastestValue = () => ({
  type: 'FASTEST'
})

export const setOptimalValue = () => ({
  type: 'OPTIMAL'
})

const initialState = {
  sortButton: SORTED_BUTTON.CHEAPEST

}

// eslint-disable-next-line default-param-last
export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHEAPEST':
    return { sortButton: SORTED_BUTTON.CHEAPEST }
  case 'FASTEST':
    return { sortButton: SORTED_BUTTON.FASTED }
  case 'OPTIMAL':
    return { sortButton: SORTED_BUTTON.OPTIMAL }
  default:
    return state
  }
}