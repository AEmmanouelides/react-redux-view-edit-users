import { UserState, UserTypes } from '../models/store.models';
import { EDIT_USER, GET_USERS, GET_USERS_LOADING } from '../types/types';

const INITIAL_STATE: UserState = {
  users: [],
  loading: false
}

function userReducer(state = INITIAL_STATE, action: UserTypes): UserState {
  switch (action.type) {
    case GET_USERS_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case EDIT_USER: {
      const newState = { ...state }
      const users = newState.users.map(u => u.id === action.payload.id ? action.payload : u)
      newState.users = users
      return newState
    }
    case GET_USERS: {
      const newState = { ...state }
      newState.users = action.payload.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
          phone: user.phone,
          website: user.website,
          companyName: user.company.name
        }
      })
      newState.loading = false;
      return newState
    }
    default:
      return state
  }
}

export default userReducer