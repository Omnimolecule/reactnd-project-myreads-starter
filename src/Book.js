import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import BookImage from './BookImage'

const Book = (props) => {
    const { book } = this.props
    return (
        <div className="book">
            <div className="book-top">
                <BookImage imageUrl={book.imageUrl} />
                <BookShelfChanger shelf="currentlyReading" />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
        </div>
    )
}

export default Book