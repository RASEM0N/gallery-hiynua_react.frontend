import { IMAGES } from '../actiion/types-action'

const initialState = {
    images: [],
    loading: false,
    error: null,
    page: 1,
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case IMAGES.LOAD: {
            return {
                ...state,
                loading: true,
            }
        }
        case IMAGES.LOAD_FAIL: {
            return {
                ...state,
                loading: false,
                error: payload,
            }
        }
        case IMAGES.LOAD_SUCCESS: {
            return {
                ...state,
                images: [...state.images, ...payload],
                loading: false,
                page: state.page + 1,
            }
        }
        default: {
            return state
        }
    }
}
