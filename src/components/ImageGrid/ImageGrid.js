import React, { useEffect } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { loadImages } from '../../actiion/imaged-action'

const ImageGrid = ({ images, error, page, loading, loadImages }) => {
    useEffect(() => {
        loadImages()
    }, [])

    return (
        <div className="content">
            <button onClick={loadImages} className={'more'}>
                More...?
            </button>
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
    images: state.images,
    loading: state.loading,
    error: state.error,
    page: state.page,
})

export default connect(mapStateToProps, {
    loadImages,
})(ImageGrid)
