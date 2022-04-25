export interface INF_FilterConfig {
    new: string;
    old: string;
    popular: string;
    controversial: string;
    top: string;
}

export interface INF_PaginationRound {
    next: number | null;
    previous: number | null;
}