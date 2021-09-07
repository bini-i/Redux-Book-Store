import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from './Book'
import { mapStateToProps, mapDispatchToProps } from "../reducers";

const BooksList = ({books}) => {
        const booksRow = books.map((book)=>
            <Book key={book.id} id={book.id} title={book.title} category={book.category}/>
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
    books: PropTypes.instanceOf(Array).isRequired
}   