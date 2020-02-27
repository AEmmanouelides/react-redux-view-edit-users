import { User } from '../../models/user.model';
export interface UserState {
    users: User[]
    loading: boolean
}
export interface UserAction {
    type: string
    payload: any
}

export type UserTypes = UserAction