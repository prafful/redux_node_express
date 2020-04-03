import { combineReducers } from "redux";
import getFriends from "./reducer-getfriends";
import increaseLikeActionReceived from "./reducer-increaseLike";


const allFriends = combineReducers({
    friends: increaseLikeActionReceived
})

export default allFriends