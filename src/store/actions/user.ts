import axios from 'axios'
import { User } from '../../models/user.model'
import { EDIT_USER, GET_USERS, GET_USERS_LOADING } from '../types/types'

export const editUser = (data: User) => ({
  payload: data,
  type: EDIT_USER,
})

export const getUsers = (data: User[]) => ({
  payload: data,
  type: GET_USERS,
})

export const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
})

export function retrieveUsers(dispatch: any): void {
  dispatch(getUsersLoading())
  axios
    .get('../usersMockData.json')
    .then(response => {
      dispatch(getUsers(response.data))
    })
    .catch(error => {
      console.log(error)
    })
}