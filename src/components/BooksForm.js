const BooksForm = () => {
    const bookCategories =["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    const categoryOptions = bookCategories.map((category)=>
        <option key={category}>{category}</option>
    )
    return (
        <form>
            <input type="text" id="title"/>
            <select>
                {categoryOptions}
            </select>
            <input type="submit" value="Add Book"/>
        </form>
    )
}

export default BooksForm;   