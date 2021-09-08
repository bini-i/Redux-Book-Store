import PropTypes from "prop-types";
import bookCategories from "../helpers/bookCategories"

const CategoryFilter = ({filter, handleFilterChange}) => {
    const filterOptions = ['ALL'].concat(bookCategories).map((filterOption, index) => 
        // eslint-disable-next-line react/no-array-index-key
        <option key={index}>{filterOption}</option>
    )

    return (
        <select onChange={handleFilterChange} value={filter}>
            {filterOptions}
        </select>
    )
}

export default CategoryFilter

CategoryFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
}   