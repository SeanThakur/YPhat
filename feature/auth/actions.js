import axios from "axios";

import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_LOADING,
    SET_CURRENT_USER_OFF
} from "./types";

import {
    GET_ERROR,
    ERROR_CLEANUP
} from "../error/types"

import setAuthToken from "../../utils/setAuthToken";

import jwt_decode from "jwt-decode";

const HOST = `http://18.224.141.133/api`;

export const setRegister = (data, router) => async dispatch => {

    try {

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/users/signup`, 
            data,
            config
        )
        .then(() => router.push("/login"))
        .catch(err => dispatch({
            type: GET_ERROR,
            payload: err.response.data.data
        }));
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setLogin = (data) => async dispatch => {
    try{

        dispatch({
            type: SET_CURRENT_USER_LOADING,
            payload: true
        })

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/users/signin`, 
            data, 
            config
        ).then((res) => {
            const {token} = res.data.data;
            localStorage.setItem("jwtLoginToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) => {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
            dispatch({
                type: SET_CURRENT_USER_LOADING,
                payload: false
            })
        });

    }catch(error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }
}

export const setCurrentUser = (data) => {
    return{
        type: SET_CURRENT_USER,
        payload: data
    }
}

export const setLogout = () => dispatch => {
    localStorage.removeItem("jwtLoginToken");
    dispatch(setCurrentUserOff());
}

export const setCurrentUserOff = () => {
    return{
        type: SET_CURRENT_USER_OFF
    }
}

export const setErrorClear = () => dispatch => {
    dispatch({
        type: ERROR_CLEANUP,
    })
}