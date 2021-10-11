import $api from "../../utils/http"
import {
    LOGOUT_USER,
    LOGIN_USER,
    REGISTER_USER,
    REFRESH_TOKEN,
    GET_USER_INFO,
    GET_ALL_USERS
} from "../types/user-types";

const loginAction = (username, password) => dispatch => {
    try {
        $api.post("/login", {
            username,
            password
        }).then(response => {
            dispatch({
                type: LOGIN_USER,
                payload: response.data.acessToken
            });
            localStorage.setItem("token", response.data.acessToken)
        })
    } catch (e) {

    }
}

const registerAction = (username, password) => dispatch => {
    try {
        $api.post("/register", {
            username,
            password,
            password_confirm
        }).then(response => {
            dispatch({
                type: REGISTER_USER,
                payload: response.data
            })
        })
    } catch (e) {

    }
}

const logoutAction = () => dispatch => {
    try {
        $api.post("/logout")
            .then(response => {
                dispatch({
                    type: LOGOUT_USER
                })
                localStorage.removeItem("token")
            })
    } catch (e) {

    }
}

const refreshTokenAction = () => dispatch => {
    try {
        $api.post("/refresh")
            .then(response => {
                dispatch({
                    type: REFRESH_TOKEN,
                    payload: response.data.token
                })
                localStorage.setItem("token", response.data.acessToken)
            })
    } catch (e) {

    }
}

const getUserInfoAction = (userId) => dispatch => {
    try {
        $api.get("users/" + userId)
            .then(response => {
                dispatch({
                    type: GET_USER_INFO,
                    payload: response.data
                })
            })
    } catch (e) {

    }
}

const getAllUserAction = () => dispatch => {
    try {
        $api.get("users")
            .then(response => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: response.data
                })
            })
    } catch (e) {

    }
}

export default {
    loginAction,
    logoutAction,
    registerAction,
    refreshTokenAction,
    getAllUserAction,
    getUserInfoAction
}