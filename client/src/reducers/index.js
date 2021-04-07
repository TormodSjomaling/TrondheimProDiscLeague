import { combineReducers } from 'redux'

import roundReducer from './round.js'

const allReducers = combineReducers({
    rounds: roundReducer
})

export default allReducers;