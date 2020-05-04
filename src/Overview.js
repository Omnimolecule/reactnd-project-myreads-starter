import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types';

const Overview = (props) => {
    let { books } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf title="Currently Reading"
                        books={books.filter((book) => book.shelf === 'currentlyReading')}
                        onBookShelfUpdated={props.onBookShelfUpdated} />
                    <Bookshelf
                        title="Want to Read" books={books.filter((book) => book.shelf === 'wantToRead')}
                        onBookShelfUpdated={props.onBookShelfUpdated} />
                    <Bookshelf
                        title="Read" books={books.filter((book) => book.shelf === 'read')}
                        onBookShelfUpdated={props.onBookShelfUpdated} />
                </div>
            </div>
            <Link to="/search" className="open-search">
                <button>Add a book</button>
            </Link>
        </div>
    );

}

Overview.propTypes = {
    onBookShelfUpdated: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default Overview