import { key, imagesURL } from '../config/config'

export const fetchImageStats = async id => {
    const response = await fetch(
        `${imagesURL}/${id}/statistics/?client_id=${key}`
    )
    const data = await response.json()
    if (response.status >= 400) throw new Error(data.errors)

    return data
}
