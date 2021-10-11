import {
    combineReducers
} from "redux";

import notes from "./notes-reducer";
import users from "./users-reducer";

const rootReducers = combineReducers({
    notes,
    users
})

export default rootReducers