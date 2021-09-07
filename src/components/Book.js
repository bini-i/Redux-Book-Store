import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../reducers";

const Book = ({id, title, category, removeBook}) => {
        const handleRemoveBook = () => {
            removeBook({id, title, category})
        }   
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{category}</td>
                <td>
                    <button onClick={handleRemoveBook} name='removeBook' type="button" value='Remove book'>
                        Remove book
                    </button> 
                </td>
            </tr>
        )
    }

export default connect(null, mapDispatchToProps)(Book);


Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    removeBook: PropTypes.func.isRequired
};
  