// eslint-disable-next-line import/prefer-default-export
export const fetchTickets = () => async (dispatch) => {
  try {
    const searchResponse = await fetch('https://aviasales-test-api.kata.academy/search')
    const searchData = await searchResponse.json()
    const {searchId} = searchData
    console.log(searchData)
  
    const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const ticketsData = await ticketsResponse.json()
  
    dispatch({ type: 'SET_TICKETS', payload: ticketsData.tickets })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const initialState = {
  tickets: []
}
  
// eslint-disable-next-line default-param-last
export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_TICKETS':
    return { ...state, tickets: action.payload }
  default:
    return state
  }
}