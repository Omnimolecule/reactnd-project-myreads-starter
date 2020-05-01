import React from 'react'

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

export default BookImage