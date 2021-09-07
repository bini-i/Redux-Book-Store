import PropTypes from "prop-types";

const Book = ({id, title, category, handleRemoveBook}) => (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{category}</td>
                <td>
                    <button onClick={handleRemoveBook.bind(this, {id, title, category})} name='removeBook' type="button" value='Remove book'>
                        Remove book
                    </button> 
                </td>
            </tr>
        )

export default Book;


Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    handleRemoveBook: PropTypes.func.isRequired
};
  