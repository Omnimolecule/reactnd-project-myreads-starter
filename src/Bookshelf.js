import React from 'react'
import BookGrid from './BookGrid'

const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <BookGrid books={props.books} />
            </div>
        </div>
    )
}

export default Bookshelf