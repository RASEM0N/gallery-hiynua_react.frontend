import { takeEvery, select, call, put } from 'redux-saga/effects'
import { IMAGES } from '../actiion/types-action'
import { fetchImages } from '../api/image-api'
import { setImages, setError } from '../actiion/imaged-action'

// ля селектор
const getPage = state => state.page

function* handleImagesLoad() {
    try {
        const page = yield select(getPage)
        console.log(page)
        const images = yield call(fetchImages, page)
        yield put(setImages(images))
    } catch (error) {
        yield put(setError(error.toString()))
    }
}

// watcher saga
function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

// watcher saga -> actions -> worker saga
export default watchImagesLoad
