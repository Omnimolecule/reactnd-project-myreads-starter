import React from 'react'
import PropTypes from 'prop-types';

const BookImage = (props) => {
    return (
        <div className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${props.imageUrl}")`
            }} />
    )
}

BookImage.propTypes = {
    imageUrl: PropTypes.string.isRequired
}

export default BookImage