import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import {TypeKeys,fetchUserFailed, fetchUserSucceeded} from 'actions/users'

let getUser = (userId) =>{
    return {
        name:"LW",
        age:20
    }
}
function* fetchUser(action){
    try{
        yield delay(1000);
        alert('call fecth user');
        const user = yield call(getUser,action.payload.userId);
        yield put(fetchUserSucceeded(action.payload.userId, user));  
    }
    catch (e)
    {
        yield put(fetchUserFailed(action.payload.userId,e.message));
    }
}

function* fetchUserSaga() {
    yield takeLatest(TypeKeys.FETCH_USER_REQUESTED, fetchUser);
}

export default function* rootSags() {
    yield all([
        fetchUserSaga()
    ])
}