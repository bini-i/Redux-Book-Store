export const CREATE_BOOK = 'create'
export const REMOVE_BOOK = 'remove'

export const createBook = (book)=>({
        type: CREATE_BOOK,
        book
    })

export const removeBook = (book)=>({
        type: REMOVE_BOOK,
        book
    })
