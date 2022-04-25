import React from 'react'
import { usePagination } from '../../hooks/usePagination';
import { INF_PaginatedResponse } from '../../services/types'
import Button from '../Modules/Buttons/Button'
import { INF_UnderPagination } from './types';

const UnderPagination = (props: INF_UnderPagination) => {
    const [next, previous] = usePagination(props);

    return (
        <div className="[ button-group ] [ margin-block-1 flex-between ]">
            <Button 
                rest={{"data-dead": !Boolean(props?.previous)}}
                onClick={() => props.setOffset(previous ? previous : 0)} 
                variant='full-blue'>

                Previous
            </Button>
            
            <Button 
                rest={{"data-dead": !Boolean(props?.next)}}
                onClick={() => props.setOffset(next ? next : 0)} variant='full-blue'>
                Next
            </Button>
        </div>
    )
}

export default UnderPagination;