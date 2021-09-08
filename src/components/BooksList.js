import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from './Book'
import { mapStateToProps, mapDispatchToProps } from "../reducers";
import CategoryFilter from "./CategoryFilter";

const BooksList = ({books, removeBook, filter, changeFilter}) => {
        const handleRemoveBook = ({id,title,category}) => {
            removeBook({id, title, category})
        } 

        const handleFilterChange = (event) => {
            changeFilter(event.target.value)
        }

        const filteredBooks = () => {
            if(filter!=='ALL'){
                return books.filter((book) => book.category === filter)
            }
            return books
        }

        const booksRow = filteredBooks().map((book)=>
            <Book key={book.id} id={book.id} title={book.title} category={book.category} handleRemoveBook={handleRemoveBook}/>
        )

        return (
            <>
                <table>
                    <thead>
                        <tr> 
                            <th>Book ID</th>
                            <th>title</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksRow}
                    </tbody>
                </table>
                <div className='filter'>
                    <span>Filter Books</span>
                    <CategoryFilter filter={filter} handleFilterChange={handleFilterChange}/>
                </div>
            </>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
    books: PropTypes.instanceOf(Array).isRequired,
    removeBook: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}   