import React from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types';

const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <BookGrid
                    books={props.books}
                    onBookShelfUpdated={props.onBookShelfUpdated} />
            </div>
        </div>
    )
}

Bookshelf.propTypes = {
    onBookShelfUpdated: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default Bookshelf