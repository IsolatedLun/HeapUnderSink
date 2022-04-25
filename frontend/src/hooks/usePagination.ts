import { useEffect, useState } from "react";
import { INF_PaginatedResponse } from "../services/types";
import { INF_PaginationRound } from "./types";

/**
 * 
 * @param data
 * @returns [next, previous, offset, setOffset]
 */
export function usePagination(data?: INF_PaginatedResponse<any>): [number | null, number | null] {
    const [round, setRound] = useState<INF_PaginationRound>({
        next: null,
        previous: null
    })

    useEffect(() => {
        if(data) {
            const previous = data.previous ? Number(data?.previous.split('offset=')[1]) : null;
            const next = data.next ? Number(data?.next.split('offset=')[1]) : null;

            setRound({ next, previous });
        }
            
    }, [data])

    return [round.next, round.previous];
}