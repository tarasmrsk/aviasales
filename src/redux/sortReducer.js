const SORTED_BUTTON = {
  CHEAPEST: 'CHEAPEST',
  FASTED: 'FASTED',
  OPTIMAL: 'OPTIMAL',
}

export const setCheapestValue = () => ({
  type: 'CHEAPEST'
})

export const setFastestValue = () => ({
  type: 'FASTED'
})

export const setOptimalValue = () => ({
  type: 'OPTIMAL'
})

const initialState = {
  ticket: SORTED_BUTTON.CHEAPEST

}

// eslint-disable-next-line default-param-last
export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHEAPEST':
    return { ticket: SORTED_BUTTON.CHEAPEST }
  case 'FASTED':
    return { ticket: SORTED_BUTTON.FASTED }
  case 'OPTIMAL':
    return { ticket: SORTED_BUTTON.OPTIMAL }
  default:
    return state
  }
}