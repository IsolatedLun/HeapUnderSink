import { useEffect, useState } from "react";
import { INF_FilterConfig } from "./types";

function createDefaultConfig(): INF_FilterConfig {
    return {
        new: 'created_at',
        old: '-created_at',
        popular: 'views',
        controversial: '-votes',
        top: 'votes'
    }
}

/**
 * @param objectSetter
 * @param config [not required] - Config for the keys
 * @returns sorted array of objects depending on "sortBy".
*/
export function useFilter(objects: any[] | undefined, objectSetter: Function, 
    config?: INF_FilterConfig): [Function] {
        
    if(!config)
        config = createDefaultConfig();

    const [sortBy, setSortBy] = useState('default');
    const [original, setOriginal] = useState(objects);

    useEffect(() => {
        if(original)
            objectSetter(() => {
                const arr = [...original];

                if(config) {
                    if(sortBy === 'popular')
                        return sortByViews(arr, config[sortBy]);
                    else if(sortBy === 'top' || sortBy === 'controversial')
                        return sortByVotes(arr, config[sortBy]);
                    else if(sortBy === 'new')
                        return sortByNew(arr, config[sortBy]);
                    else if(sortBy.startsWith('key')) {
                        const [_, key, val] = sortBy.split('_');
                        return sortByText(arr, key.toLowerCase(), val.toLowerCase());
                    }
                }

                return arr;
            })

    }, [sortBy])

    useEffect(() => {
        if(original === undefined)
            setOriginal(objects);
    }, [objects])

    return [setSortBy];
}

// Sorters

function sortByViews(arr: any[], key: string) {
    return arr.sort((a, b) => b[key] - a[key]);
}

function sortByText(arr: any[], key: string, val: string) {
    if(val.length > 0)
        return arr.filter(obj => obj[key].indexOf(val) > -1);
    return arr;
}

function sortByVotes(arr: any[], key: string) {
    if(key.startsWith('-')) {
        key = key.split('-')[1];
        return arr.sort((a, b) => a[key] - (b[key]));
    }
        
    return arr.sort((a, b) => b[key] - a[key]);
}

function sortByNew(arr: any[], key: string) {
    return arr.sort((a, b) => +new Date(b[key]) - +new Date(a[key]));
}