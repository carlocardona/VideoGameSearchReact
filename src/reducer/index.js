import { combineReducers } from "redux";
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    user: userReducer,
})

export default rootReducer;