// eslint-disable-next-line import/prefer-default-export
export const showMoreTickets = () => ({
  type: 'SHOW_MORE_TICKETS'
})

const initialState = {
  displayedTicketsCount: 5
}
  
// eslint-disable-next-line default-param-last
export const moreticketReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SHOW_MORE_TICKETS':
    return {
      ...state,
      displayedTicketsCount: state.displayedTicketsCount + 5
    }
  default:
    return state
  }
}
