import { popup } from "../components/Layouts/Popup/funcs";
import { INF_User } from "../features/types";
import { useAuth } from "./useAuth"

export function useLoggedAction(fn: Function): (user: INF_User) => any {
    const [user, isLogged] = useAuth();

    if(isLogged)
        return (user) => fn();
    else
        return () => popup('You must be logged in to perform this action.', 'red');
}