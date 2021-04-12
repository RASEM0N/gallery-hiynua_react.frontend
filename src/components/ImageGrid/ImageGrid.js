import React, { useEffect } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { loadImages } from '../../actiion/imaged-action'

const ImageGrid = ({ images, error, page, stats, loading, loadImages }) => {
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
                        <div className={'downloads'}>
                            {stats[image.id]
                                ? stats[image.id].downloads
                                : '...'}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    images: state.images.images,
    loading: state.images.loading,
    error: state.images.error,
    page: state.images.page,
    stats: state.stats,
})

export default connect(mapStateToProps, {
    loadImages,
})(ImageGrid)
