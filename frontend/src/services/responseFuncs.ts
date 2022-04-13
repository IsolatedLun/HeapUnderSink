import { useNavigate } from "react-router-dom";
import { INF_TokenResponse } from "../components/Forms/types";
import { INF_Response, INF_ResponseActions } from "./types";

export function handleResponse(res: INF_Response, options: INF_ResponseActions) {
    const navigate = useNavigate();

    if(res.status >= 400) return;
        //... display popup
    if(options.redirectTo)
        navigate(options.redirectTo);
    if(options.popup) return;
        //... display popup
}

export function setTokens(tokens: INF_TokenResponse) {
    localStorage.setItem('refresh', tokens.refresh);
    localStorage.setItem('refresh', tokens.access);
}

export function getTokens(): INF_TokenResponse {
    return {
        refresh: localStorage.getItem('refresh')!,
        access: localStorage.getItem('access')!
    }
}