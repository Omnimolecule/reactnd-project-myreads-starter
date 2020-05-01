import React from 'react'
import BookGrid from './BookGrid'
import SearchBar from './SearchBar'

class Search extends React.Component {
    render() {
        return (
            <div className="search-books">
                <SearchBar />
                <div className="search-books-results">
                    <BookGrid books={[]} />
                </div>
            </div>
        );
    }
}

export default Search