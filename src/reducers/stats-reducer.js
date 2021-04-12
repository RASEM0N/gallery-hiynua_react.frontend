import { STATS } from '../actiion/types-action'

const initialState = {}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case STATS.LOAD: {
            return {
                ...state,
                [payload.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false,
                },
            }
        }
        case STATS.LOAD_FAIL: {
            return {
                ...state,
                [payload.id]: {
                    isLoading: false,
                    downloads: null,
                    error: payload.error,
                },
            }
        }
        case STATS.LOAD_SUCCESS: {
            return {
                ...state,
                [payload.id]: {
                    isLoading: false,
                    downloads: payload.downloads,
                    error: false,
                },
            }
        }
        default: {
            return state
        }
    }
}
