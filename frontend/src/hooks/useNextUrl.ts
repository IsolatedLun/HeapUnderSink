import { useNavigate, useSearchParams } from "react-router-dom";

export function useNextUrl(def: string) {
    const [params] = useSearchParams();
    const next = params.get('next');

    return next ? next : def;
}