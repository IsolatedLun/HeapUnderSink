import { popup } from "../components/Layouts/Popup/funcs";
import { INF_User } from "../features/types";
import { useAuth } from "./useAuth"

export function useLoggedActions(...fnx: Function[]): Function[] {
    const [user, isLogged] = useAuth();

    const errorFunc = () => popup('You must be logged in to perform this action.', 'red');

    if(typeof([]) === 'object') {
        const arr = [];

        for(let i = 0; i < fnx.length ; i++) {
            const func = isLogged ? (fnx as Function[])[i] : errorFunc;
            arr.push(func);
        }

        return arr;

    }
        
    else {
        return isLogged ? fnx : [errorFunc];
    }
}