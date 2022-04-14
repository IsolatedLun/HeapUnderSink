import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { INF_User } from "../features/types";
import axios from 'axios'

export function useAuth(): [INF_User, boolean] {
    const { user, isLogged } = useAppSelector(state => state.auth);

    return useMemo(() => ([ user, isLogged ]), [user, isLogged]);
}