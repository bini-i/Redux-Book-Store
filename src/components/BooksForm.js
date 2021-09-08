import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {mapDispatchToProps} from '../reducers'
import './styles.css'
import bookCategories from '../helpers/bookCategories'

const BooksForm = ({addNewBook}) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [bookTitleError, setBookTitleError] = useState('');

    const categoryOptions = bookCategories.map((category)=>
        <option key={category}>{category}</option>
    )
    
    const handleChange = (event) => {
        if(event.target.id === 'title'){
            setTitle(event.target.value)
        }else if(event.target.id === 'category'){
            setCategory(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBookTitleError("")
        if(title === ''){
            setBookTitleError("Book title empty")
        }else{
            setTitle('')
            setCategory('')
            addNewBook({id: Math.floor(Math.random() * 1000) + 1, title, category})
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='input-wrap'>   
                <input onChange={handleChange} placeholder="book name" type="text" id="title" value={title}/>
                <span className='input-error'>{bookTitleError}</span>
            </div>
            <select onChange={handleChange} id="category" value={category}>
                <option disabled value="">--Please choose a category--</option>
                {categoryOptions}
            </select>
            <input type="submit" value="Add Book"/>
        </form>
    )
}

export default connect(null, mapDispatchToProps)(BooksForm);   

BooksForm.propTypes = {
    addNewBook: PropTypes.func.isRequired
}   