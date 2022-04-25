import { INF_PaginatedResponse } from "../../services/types";

export interface INF_UnderPagination extends INF_PaginatedResponse<any> {
    setOffset: Function;
}