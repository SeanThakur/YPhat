import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_OFF,
    SET_CURRENT_USER_LOADING
} from "./types";

const initialState = {
    loading: false,
    isAuth: false,
    user : {}
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_CURRENT_USER_LOADING:
            return {
                ...state,
                loading : action.payload,
                isAuth: false,
                user : {}
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: action.payload
            }
        case SET_CURRENT_USER_OFF:
            return {
                ...state,
                loading: false,
                isAuth: false,
                user: {}
            }
        default:
            return state;
    }
}