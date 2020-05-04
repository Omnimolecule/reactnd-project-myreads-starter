import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class Overview extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }));
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} />
                        <Bookshelf title="Want to Read" books={this.state.books.filter((book) => book.shelf === 'wantToRead')} />
                        <Bookshelf title="Read" books={this.state.books.filter((book) => book.shelf === 'read')} />
                    </div>
                </div>
                <Link to="/search" className="open-search">
                    <button>Add a book</button>
                </Link>
            </div>
        );
    }
}

export default Overview