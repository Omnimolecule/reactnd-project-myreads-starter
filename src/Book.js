import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import BookImage from './BookImage'
import Bookshelf from './Bookshelf';

class Book extends React.Component {

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