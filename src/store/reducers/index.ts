import { combineReducers } from 'redux'

import userReducer from './user'

const rootReducer = combineReducers({
  usersDatabase: userReducer,
})

export default rootReducer