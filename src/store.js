import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import images from './reducers/images-reducer'
import watchImagesLoad from './saga/image-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    images,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
// запускаем сагу
sagaMiddleware.run(watchImagesLoad)
export default store
