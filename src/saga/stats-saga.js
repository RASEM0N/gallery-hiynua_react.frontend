import { take, fork, call, put } from 'redux-saga/effects'
import { IMAGES } from '../actiion/types-action'
import { fetchImageStats } from '../api/stat-api'
import {
    loadImageStats,
    setImageStats,
    setImageStatsError,
} from '../actiion/stats-action'

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id))
            const stat = yield call(fetchImageStats, id)
            yield put(setImageStats(id, stat.downloads.total))
            return true
        } catch (e) {
            yield put(setImageStatsError(id, e.toString()))
        }
    }
}

function* watchStatsRequest() {
    while (true) {
        // в пейлоуд приходят по три
        const { payload } = yield take(IMAGES.LOAD_SUCCESS)
        for (let i = 0; i < payload.length; i++) {
            yield fork(handleStatsRequest, payload[i].id)
        }
    }
}

export default watchStatsRequest
