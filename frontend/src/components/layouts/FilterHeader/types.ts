export interface INF_FilterHeader {
    header: string;
    setSort: Function;
    sortPlaceholder: string;
    sortTextKey: string;

    filters: INF_FilterItem[];
}

export interface INF_FilterItem {
    name: string;
    field: string;
}