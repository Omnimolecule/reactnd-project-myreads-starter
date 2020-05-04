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
                if (Array.isArray(result)){
                    this.setState(() => ({
                        books: result
                    }));
                }
            });
        } else {
            this.setState(() => ({
                books: []
            }));
        }
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