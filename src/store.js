import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import images from './reducers/images-reducer'
import stats from './reducers/stats-reducer'

import rootSaga from './saga/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers({
        images,
        stats,
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
// запускаем сагу
sagaMiddleware.run(rootSaga)
export default store
