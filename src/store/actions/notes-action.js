import {
    ADD_NOTE,
    GET_NOTE,
    GET_ALL_NOTES,
    EDIT_NOTE,
    DELETE_NOTE
} from "../types/notes-types";

import $api from "../../utils/http";

const addNoteAction = (data) => dispatch => {
    try {
        $api.post("/notes/add", {
                ...data
            })
            .then(response => {
                dispatch({
                    type: ADD_NOTE,
                    payload: data
                })
            })
    } catch (e) {

    }
}

const getNoteAction = (noteId) => dispatch => {
    try {
        $api.get("/notes/" + noteId)
            .then(response => {
                dispatch({
                    type: GET_NOTE,
                    payload: response.data
                })
            })
    } catch (e) {

    }
}

const getNotesAction = () => dispatch => {
    try {

        $api.get("/notes/")
            .then(response => {
                dispatch({
                    type: GET_ALL_NOTES,
                    payload: response.data
                })
            })
    } catch (e) {

    }
}

const editNoteAction = (idNote, data) => dispatch => {
    try {
        $api.put("/notes/" + idNote, {
                ...data
            })
            .then(response => {
                dispatch({
                    type: EDIT_NOTE,
                    payload: data
                })
            })
    } catch (e) {

    }
}

const deleteNoteAction = (idNote) => dispatch => {
    try {
        $api.delete("/notes/" + idNote)
            .then(response => {
                dispatch({
                    type: DELETE_NOTE,
                    payload: idNote
                })
            })
    } catch (e) {

    }
}

export default {
    addNoteAction,
    deleteNoteAction,
    editNoteAction,
    getNotesAction,
    getNoteAction
}