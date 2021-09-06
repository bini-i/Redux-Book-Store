import PropTypes from "prop-types";

const Book = ({id, title, category}) => (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{category}</td>
        </tr>
    )

export default Book;


Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};
  