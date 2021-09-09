import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from './Book'
import { mapStateToProps, mapDispatchToProps } from "../reducers";
// import CategoryFilter from "./CategoryFilter";

const BooksList = ({books, removeBook, filter}) => {
        const handleRemoveBook = ({id,title,category}) => {
            removeBook({id, title, category})
        } 

        // const handleFilterChange = (event) => {
        //     changeFilter(event.target.value)
        // }

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
                <section className='books-list'>
                    {booksRow}
                </section>
                {/* <section className='filter'>
                    <span>Filter Books</span>
                    <CategoryFilter filter={filter} handleFilterChange={handleFilterChange}/>
                </section> */}
            </>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
    books: PropTypes.instanceOf(Array).isRequired,
    removeBook: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    // changeFilter: PropTypes.func.isRequired,
}   