import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from './Book'
import { mapStateToProps, mapDispatchToProps } from "../reducers";

const BooksList = ({books, removeBook}) => {
        const handleRemoveBook = ({id,title,category}) => {
            removeBook({id, title, category})
        } 

        const booksRow = books.map((book)=>
            <Book key={book.id} id={book.id} title={book.title} category={book.category} handleRemoveBook={handleRemoveBook}/>
        )

        return (
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
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
    books: PropTypes.instanceOf(Array).isRequired,
    removeBook: PropTypes.func.isRequired
}   