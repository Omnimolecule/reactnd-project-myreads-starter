import React from 'react'
import Book from './Book'

const BookGrid = (props) => {
    return (
        <ol className="books-grid">
            {props.books.map((book) => (
                <li>
                    <Book
                        book={book}
                        onBookShelfUpdated={props.onBookShelfUpdated} />
                </li>
            ))}
        </ol>
    )
}

export default BookGrid