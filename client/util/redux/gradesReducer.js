import callBuilder from '../apiConnection'
/**
 * Actions and reducers are in the same file for readability
 */

export const getSurpriseGradesAction = () => {
  const route = '/surprisegrades'
  const prefix = 'GET_SURPRISE_GRADES'
  return callBuilder(route, prefix)
}

// Reducer
// You can include more app wide actions such as "selected: []" into the state
export default (state = { data: null }, action) => {
  switch (action.type) {
    case 'GET_SURPRISE_GRADES_ATTEMPT':
      return {
        ...state,
        pending: true,
        error: false
      }
    case 'GET_SURPRISE_GRADES_SUCCESS':
      return {
        ...state,
        data: action.response,
        pending: false,
        error: false
      }
    case 'GET_SURPRISE_GRADES_FAILURE':
      return {
        ...state,
        data: null,
        pending: false,
        error: true
      }

    default:
      return state
  }
}
