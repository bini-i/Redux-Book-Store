import { CREATE_BOOK, REMOVE_BOOK } from "../actions";

const booksReducer = (state = [], action)=> {
    switch(action.type){
        case CREATE_BOOK:
            return [...state, action.book]
        case REMOVE_BOOK:
            if(state.includes(action.book)){
                state.filter((ele)=>ele!==action.book)
            }
            return []
        default:
            return state;
    }
}

export default booksReducer;

