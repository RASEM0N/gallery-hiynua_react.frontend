import { takeEvery, put } from 'redux-saga/effects'

function* workerSaga() {
    console.log('hello')
    console.log(put({ type: 'ACTION_FROM_WORKER' }))
    yield put({ type: 'ACTION_FROM_WORKER' })
}

// watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga)
}

// watcher saga -> actions -> worker saga

export default rootSaga
