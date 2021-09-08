import { CREATE_BOOK, REMOVE_BOOK } from "../actions";

const booksReducer = (state = [], action)=> {
    switch(action.type){
        case CREATE_BOOK:
            return [...state, action.book]
        case REMOVE_BOOK:
            if(state.map((ele)=>ele.id).includes(action.book.id)){
                return state.filter((ele)=>ele.id!==action.book.id)
            }
            return [...state]
        default:
            return state;
    }
}

export default booksReducer;

