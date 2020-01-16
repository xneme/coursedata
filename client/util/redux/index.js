import { combineReducers } from 'redux'

import correlations from './correlationsReducer'
import grades from './gradesReducer'

export default combineReducers({
  correlations,
  grades
})
