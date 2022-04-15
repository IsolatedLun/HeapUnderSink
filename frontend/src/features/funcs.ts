import axios from "axios";
import { API_URL } from "../consts";
import { getTokens, setTokens } from "../services/responseFuncs";

export async function renewTokens() {
    axios.post(API_URL + '/users/token/refresh', { refresh: getTokens().refresh })
        .then(res => {
            localStorage.setItem('access', res.data.access);
        })
}