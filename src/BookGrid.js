import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const BookGrid = (props) => {
    return (
        <ol className="books-grid">
            {props.books.map((book) => (
                <li key={book.id}>
                    <Book
                        book={book}
                        onBookShelfUpdated={props.onBookShelfUpdated} />
                </li>
            ))}
        </ol>
    )
}

BookGrid.propTypes = {
    onBookShelfUpdated: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default BookGrid