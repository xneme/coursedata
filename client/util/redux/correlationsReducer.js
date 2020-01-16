import callBuilder from '../apiConnection'
/**
 * Actions and reducers are in the same file for readability
 */

export const getCorrelationsAction = () => {
  const route = '/correlations'
  const prefix = 'GET_CORRELATIONS'
  return callBuilder(route, prefix)
}

// Reducer
// You can include more app wide actions such as "selected: []" into the state
export default (state = { data: [] }, action) => {
  switch (action.type) {
    case 'GET_CORRELATIONS_ATTEMPT':
      return {
        ...state,
        data: action.response,
        pending: true,
        error: false
      }
    case 'GET_CORRELATIONS_SUCCESS':
      return {
        ...state,
        data: action.response,
        pending: false,
        error: false
      }
    case 'GET_CORRELATIONS_FAILURE':
      return {
        ...state,
        data: [],
        pending: false,
        error: true
      }

    default:
      return state
  }
}
