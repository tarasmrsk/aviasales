// eslint-disable-next-line import/prefer-default-export
export const fetchTickets = () => async (dispatch) => {
  try {
    // Получаем searchId
    const searchResponse = await fetch('https://aviasales-test-api.kata.academy/search')
    const searchData = await searchResponse.json()
    const {searchId} = searchData
  
    // Получаем билеты
    const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const ticketsData = await ticketsResponse.json()
    const {tickets} = ticketsData
    console.log(ticketsData)
  
    dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: tickets })
  } catch (error) {
    dispatch({ type: 'FETCH_TICKETS_FAILURE', payload: error.message })
  }
}

const initialState = {
  tickets: [],
  loading: false,
  error: null
}
  
// eslint-disable-next-line default-param-last
export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_TICKETS_SUCCESS':
    return { ...state, tickets: action.payload, loading: false, error: null }
  case 'FETCH_TICKETS_FAILURE':
    return { ...state, loading: false, error: action.payload }
  default:
    return state
  }
}