import { key, imagesURL } from '../config/config'

export const fetchImages = async page => {
    const response = await fetch(
        `${imagesURL}/?client_id=${key}&per_page=28&page=${page}`
    )
    const data = await response.json()
    if (response.status >= 400) throw new Error(data.errors)

    return data
}
