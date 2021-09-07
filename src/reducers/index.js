import { combineReducers } from 'redux'
import { createBook, removeBook } from '../actions'
import booksReducer from './books'

export const rootReducer = combineReducers({
    books: booksReducer
})

export const mapStateToProps = (state) => ({
        books: state.books
    })
export const mapDispatchToProps = (dispatch) => ({
        addNewBook: (book)=>{
            dispatch(createBook(book))
        },
        removeBook: (book) => {
            dispatch(removeBook(book))
        }
    })
    