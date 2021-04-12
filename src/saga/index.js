import images from './image-saga'
import stats from './stats-saga'
import { all } from 'redux-saga/effects'

export default function*() {
    yield all([images(), stats()])
}
