import { combineReducers } from 'redux'
import { createBook, removeBook, changeFilter } from '../actions'
import booksReducer from './books'
import filterReducer from './filter'

export const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer
})

export const mapStateToProps = (state) => ({
        books: state.books,
        filter: state.filter
    })
export const mapDispatchToProps = (dispatch) => ({
        addNewBook: (book)=>{
            dispatch(createBook(book))
        },
        removeBook: (book) => {
            dispatch(removeBook(book))
        },
        changeFilter: (filter)=>{
            dispatch(changeFilter(filter))
        }
    })
    