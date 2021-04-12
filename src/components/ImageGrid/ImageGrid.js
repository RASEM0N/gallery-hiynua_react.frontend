import React, { useEffect, useState } from 'react'
import './styles.css'
import { key } from '../../config/config'
import { connect } from 'react-redux'
import { loadImages } from '../../actiion/imaged-action'

const ImageGrid = ({ imagesGlobal, error, loading, loadImages }) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        loadImages(images)
        fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
            .then(res => res.json())
            .then(images => {
                setImages(images)
            })
    }, [])

    return (
        <div className="content">
            <a onClick={loadImages}>Load images</a>
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width
                        )}`}
                    >
                        <img src={image.urls.small} alt={image.user.username} />
                    </div>
                ))}
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    imagesGlobal: state.images,
    loading: state.loading,
    error: state.error,
})

export default connect(mapStateToProps, {
    loadImages,
})(ImageGrid)
