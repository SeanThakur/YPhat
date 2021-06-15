import {
    GET_ERROR,
    ERROR_CLEANUP
} from "./types";

const initialState = {}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_ERROR:
            return action.payload;
        case ERROR_CLEANUP:
            return {};
        default:
            return state;
    }
}