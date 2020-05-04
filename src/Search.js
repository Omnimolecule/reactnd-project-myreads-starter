import React from 'react'
import BookGrid from './BookGrid'
import SearchBar from './SearchBar'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
    state = {
        booksSearchResult: []
    }

    search = (query) => {
        if (query !== '') {
            BooksAPI.search(query).then((result) => {
                let bookResult = []
                if (Array.isArray(result)) {
                    bookResult = result.map((book) => {
                        let bookInShelf = this.props.books.find((b) => b.id === book.id)
                        if (bookInShelf) {
                            book.shelf = bookInShelf.shelf;
                        }
                        return book;
                    });
                }
                this.setState(() => ({
                    booksSearchResult: bookResult
                }));
            });
        } else {
            this.setState(() => ({
                booksSearchResult: []
            }));
        }
    }

    updateBookShelf = (book, newShelf) => {
        this.props.onBookShelfUpdated(book, newShelf);
        this.setState((prevState) => {
            let newList = prevState.booksSearchResult
            newList.find((b) => b.id === book.id).shelf = newShelf;
            return {
                booksSearchResult: newList
            }
        });
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onSearch={this.search} />
                <div className="search-books-results">
                    <BookGrid
                        books={this.state.booksSearchResult}
                        onBookShelfUpdated={this.updateBookShelf} />
                </div>
            </div>
        );
    }
}

export default Search