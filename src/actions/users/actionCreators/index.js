import {TypeKeys} from '../constants'

export const fetchUserRequested = (userId) => (
    {
        type:TypeKeys.FETCH_USER_REQUESTED,
        payload:{userId}
    }
)


export const fetchUserFailed = (userId, error) => (
    {
        type:TypeKeys.FETCH_USER_FAILED,
        payload:{userId,error}
    }
)

export const fetchUserSucceeded = (userId, user) => (
    {
        type:TypeKeys.FETCH_USER_SUCCEEDED,
        payload:{userId,user}
    }
)