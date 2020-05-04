import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Overview from './Overview';
import Search from './Search';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

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

  updateBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((result) => {
      this.setState((prevState) => {
        let newList = prevState.books

        if (newShelf === 'none') {
          newList = newList.filter((b) => b.id !== book.id);
        } else {
          let listBook = newList.find((b) => b.id === book.id);
          if (listBook) {
            listBook.shelf = newShelf;
          } else {
            newList.push(book);
          }
        }

        return {
          books: newList
        }
      });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Overview
            books={this.state.books}
            onBookShelfUpdated={this.updateBookShelf} />
        )} />
        <Route path="/search" render={() => (
          <Search 
            books={this.state.books}
            onBookShelfUpdated={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
