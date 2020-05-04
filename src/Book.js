import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import BookImage from './BookImage'

const Book = (props) => {
    const { book } = props
    return (
        <div className="book">
            <div className="book-top">
                <BookImage imageUrl={book.imageLinks.smallThumbnail} />
                <BookShelfChanger shelf={book.shelf} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
    )
}

export default Book