import {
    ADD_NOTE,
    GET_NOTE,
    GET_ALL_NOTES,
    EDIT_NOTE,
    DELETE_NOTE
} from "../types/notes-types";

const initialstate = {

}

const userReducer = (state = initialstate, action) =>{
    switch(action.type)
    {
        case ADD_NOTE: return {

        };
        case GET_NOTE: return {

        };
        case EDIT_NOTE: return {

        };
        case DELETE_NOTE: return {

        };
        case GET_ALL_NOTES: return {

        };
        default: return state;
    }
}

export default userReducer;