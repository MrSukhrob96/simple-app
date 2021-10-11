import {
    LOGOUT_USER,
    LOGIN_USER,
    REGISTER_USER,
    REFRESH_TOKEN,
    GET_USER_INFO,
    GET_ALL_USERS
} from "../types/user-types";

const initialstate = {
    auth: {
        isAuth: false,
        user: {
            id: null,
            email: null,
            name: null
        }
    }
}

const userReducer = (state = initialstate, action) =>{
    switch(action.type)
    {
        case LOGIN_USER: return {

        };
        case LOGOUT_USER: return {

        };
        case REGISTER_USER: return {

        };
        case REFRESH_TOKEN: return {

        };
        case GET_USER_INFO: return {

        };
        case GET_ALL_USERS: return {

        };
        default: return state;
    }
}

export default userReducer;