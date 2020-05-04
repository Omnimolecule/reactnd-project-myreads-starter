import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import BookImage from './BookImage'
import PropTypes from 'prop-types';

class Book extends React.Component {
    static propTypes = {
        onBookShelfUpdated: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    changeShelf = (newShelf) => {
        this.props.onBookShelfUpdated(this.props.book, newShelf);
    }

    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <BookImage imageUrl={
                        book.imageLinks
                            ? book.imageLinks.smallThumbnail
                                ? book.imageLinks.smallThumbnail
                                : ''
                            : ''
                    } />
                    <BookShelfChanger shelf={book.shelf} onChangeShelf={this.changeShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book