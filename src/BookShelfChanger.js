import React from 'react'
import PropTypes from 'prop-types';

const BookShelfChanger = (props) => {
    return (
        <div className="book-shelf-changer">
            <select
                value={props.shelf ? props.shelf : 'none'}
                onChange={(event) => { props.onChangeShelf(event.target.value) }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookShelfChanger.propTypes = {
    shelf: PropTypes.string,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelfChanger