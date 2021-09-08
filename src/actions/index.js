export const CREATE_BOOK = 'create'
export const REMOVE_BOOK = 'remove'
export const CHANGE_FILTER = 'change filter'

export const createBook = (book)=>({
        type: CREATE_BOOK,
        book
    })

export const removeBook = (book)=>({
        type: REMOVE_BOOK,
        book
    })
export const changeFilter = (filter)=> ({
        type: CHANGE_FILTER,
        filter
    })
