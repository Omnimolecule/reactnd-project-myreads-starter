import React from 'react'
import BookGrid from './BookGrid'
import SearchBar from './SearchBar'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
    state = {
        books: []
    }

    search = (query) => {
        if (query !== '') {
            BooksAPI.search(query).then((result) => {
                let bookResult = []
                if (Array.isArray(result)){
                    bookResult = result;
                } 
                this.setState(() => ({
                    books: bookResult
                }));
            });
        } else {
            this.setState(() => ({
                books: []
            }));
        }
    }

    updateBookShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then((result) => {
            this.setState((prevState) => {
                let newList = prevState.books
                newList.find((b) => b.id === book.id).shelf = newShelf;
                return {
                    books: newList
                }
            });
        })
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onSearch={this.search}/>
                <div className="search-books-results">
                    <BookGrid books={this.state.books} />
                </div>
            </div>
        );
    }
}

export default Search