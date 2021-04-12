import { IMAGES } from '../actiion/types-action'

const initialState = {
    images: [],
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case IMAGES.LOAD: {
            return {
                ...initialState,
                loading: true,
            }
        }

        case IMAGES.LOAD_FAIL: {
            return {
                ...initialState,
                loading: false,
                error: payload,
            }
        }

        case IMAGES.LOAD_SUCCESS: {
            return {
                ...initialState,
                images: [...state.images, payload],
                loading: false,
            }
        }

        default: {
            return state
        }
    }
}
