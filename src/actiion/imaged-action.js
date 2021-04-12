import { IMAGES } from './types-action'

export const loadImages = () => ({
    type: IMAGES.LOAD,
})
export const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    payload: images,
})
export const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    payload: error,
})
