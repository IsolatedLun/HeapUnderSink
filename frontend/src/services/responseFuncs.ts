import { useNavigate } from "react-router-dom";
import { popup } from "../components/Layouts/Popup/funcs";
import { INF_Response, INF_ResponseActions, INF_Tokens } from "./types";

export function handleResponse(res: INF_Response, options: INF_ResponseActions) {

    if(res.status >= 400 && !options.popup)
        popup('Someting went wrong', 'red');
    if(options.redirectTo)
        location.href = options.redirectTo;
    if(options.popup)
        popup(options.popup.text, options.popup.type);
}

export function setTokens(tokens: INF_Tokens) {
    localStorage.setItem('refresh', tokens.refresh);
    localStorage.setItem('refresh', tokens.access);
}

export function getTokens(): INF_Tokens {
    return {
        refresh: localStorage.getItem('refresh')!,
        access: localStorage.getItem('access')!
    }
}