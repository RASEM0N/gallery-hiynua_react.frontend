import { takeEvery, put, call, take } from 'redux-saga/effects'
import { IMAGES } from '../actiion/types-action'

function* handleImagesLoad() {
    console.log('fetching images from unsplash')
}

function* noBlock() {
    console.log(
        'не блокируемая - не важно в какой она стоит последовательности ' +
            '(не нужно ждать пока выполняется остальные yield)'
    )
}

function* block() {
    console.log(
        'не блокируемая - не важно в какой она стоит последовательности ' +
            '(не нужно ждать пока выполняется остальные yield)'
    )
}

// watcher saga
function* rootSaga() {
    yield take('KAVO')
    yield call(block)

    // тута БЛОКИРУЕМАЯ
    // IMAGES.LOAD "не выполнится", пока конструкция сверху не выполнится
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)

    // Тута НЕБЛОКИРУЕМА
    // если бы тут стояло yield take & yield call
    // то 'NO_BLOCKING' не выполнится пока не выполнятся
    // take и call, а тут просто takeEvery и все заебца
    yield takeEvery('NO_BLOCKING', noBlock)
}

// watcher saga -> actions -> worker saga
export default rootSaga

// Blocking/ Non-blocking call https://ru.redux-saga.js.org/soderzhanie/glossary#blocking-non-blocking-call
// takeEvery - несколько раз
// take - 1 раз (LOGIN допустим т.д.) и call
