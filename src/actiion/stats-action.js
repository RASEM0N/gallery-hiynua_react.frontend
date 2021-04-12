import { STATS } from './types-action'

export const loadImageStats = id => ({
    type: STATS.LOAD,
    payload: {
        id,
    },
})
export const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    payload: {
        id,
        downloads,
    },
})
export const setImageStatsError = (id, error) => ({
    type: STATS.LOAD_FAIL,
    payload: {
        error,
        id,
    },
})
