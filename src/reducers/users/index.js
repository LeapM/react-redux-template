import{ TypeKeys } from 'actions/users'

const fetchUserRequest = (state = {age:1}, action) => {
    switch(action.type){
        case TypeKeys.FETCH_USER_SUCCEEDED:
            return action.payload.user;
        case TypeKeys.FETCH_USER_REQUESTED:
            return {
                userName:'lw',
                age:2
            };
        default:
            return state;
    }
    
}

export default fetchUserRequest;