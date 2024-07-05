const initialState = {
  searchId: null,
  tickets: [],
  sortTickets: [],
  loading: false,
  error: null,
}
    
// eslint-disable-next-line import/prefer-default-export, default-param-last
export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_SEARCH_ID_SUCCESS':
    return {
      ...state,
      searchId: action.payload.searchId,
    }
  case 'FETCH_TICKETS_REQUEST':
    return {
      ...state,
      loading: true,
      error: null,
    }
  case 'FETCH_TICKETS_SUCCESS':
    return {
      ...state,
      tickets: [...state.tickets, ...action.payload.tickets],
      loading: false,
    }
  case 'FETCH_TICKETS_FAILURE':
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    }
  case 'SET_SORT_TICKETS':
    return {
      ...state,
      sortTickets: action.payload.sortTickets,
    }
  default:
    return state
  }
}
    
export const fetchSearchId = () => async (dispatch) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error('Failed to fetch searchId')
    }
    const data = await response.json()
    dispatch({ type: 'FETCH_SEARCH_ID_SUCCESS', payload: { searchId: data.searchId } })
  } catch (error) {
    console.error('Error fetching searchId:', error)
  }
}
    
export const fetchTickets = (searchId) => async (dispatch) => {
  dispatch({ type: 'FETCH_TICKETS_REQUEST' })
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch tickets')
    }
    const data = await response.json()
    if (data) {
      dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: { tickets: data.tickets } })
    } 
  } catch (error) {
    dispatch({ type: 'FETCH_TICKETS_FAILURE', payload: { error: error.message } })
  }
}

export const setSortTickets = (sortTickets) => ({
  type: 'SET_SORT_TICKETS',
  payload: { sortTickets },
})