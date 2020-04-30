import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Overview from './Overview';
import Search from './Search';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Overview />
        )} />
        <Route path="/search" render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
