import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Book = ({id, title, category, handleRemoveBook}) => (
            <>
                <section className='book'>
                    <div className='book-info'>
                        <span className='book-category'>{category}</span>
                        <h2 className='book-title'>{title}</h2>
                        <span className='book-author'>Suzanne Collins</span>

                        <div className='opts'>
                            <button type='button'>Comments</button>
                            <button type='button' onClick={handleRemoveBook.bind(this, {id, title, category})}>Remove</button>
                            <button type='button'>Edit</button>
                        </div>
                    </div>

                    <div className='progress'>
                        <Box className='progress-indicator' position="relative" display="inline-flex">
                            <CircularProgress variant="determinate" value = '64'/>
                            <Box className='container'>
                                <p className='progress-percent'>64%</p>
                                <p className='progress-status'>Completed</p>
                            </Box>
                        </Box>

                        <div className='progress-detail'>
                            <p className='chapter-txt'>CURRENT CHAPTER</p>
                            <p className='chapter'>Chapter 17</p>
                            <button className='update-btn' type='button'>UPDATE PROGRESS</button>
                        </div>
                    </div>
                </section>
            </>
        )

export default Book;


Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    handleRemoveBook: PropTypes.func.isRequired
};
  