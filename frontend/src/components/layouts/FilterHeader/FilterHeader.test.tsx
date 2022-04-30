import { render, screen } from '@testing-library/react';
import 'jest';
import { useState } from 'react';
import { useFilter } from '../../../hooks/useFilter';
import { INF_UserPreview } from '../../../interfaces';
import { Question } from '../../Questions/Question';
import { INF_Question } from '../../Questions/types';
import FilterHeader from './FilterHeader';
import { INF_FilterItem } from './types';

const user: INF_UserPreview = {
    id: 0,
    reputation: 10,
    profile: '',
    username: 'meow-man'
} 

function createQuestion(votes: number, title: string): INF_Question {
    return {
        id: 1,
        title: title,
        tags: [],
        reports: 0,
        views: 0,
        votes: votes,
        answers: 0,
        answered: false,
        created_at: '',
        modified_at: '',
        body: '',
        user: user,
        rate_type: ''
    }
}

test('Show question with the title of "Meow" and with exactly 3 votes', () => {
    const [questions, setQuestions] = useState<INF_Question[]>(
        [
            createQuestion(3, 'Meow'),
            createQuestion(1, 'Meows'),
            createQuestion(3, 'How to do tests')
        ]
    )

    const [setSort] = useFilter(questions, setQuestions);
    const filter: INF_FilterItem = { field: 'votes', name: 'Votes' };

    render(
    <>
        <FilterHeader 
            setSort={setSort} 
            filters={[filter]} 
            sortTextKey='title' 
            sortPlaceholder='Sort by title' 
            header='Questions'
            /> 
        {
            questions.map((question, idx) => <Question key={idx} { ...question } />)
        }
    </>
    )

    // Open filter dropdown
    const filterDropdown = screen.getByText('Sort');
    filterDropdown.click();
    
    // Filter by input.
    (screen.getByPlaceholderText('Sort by Title') as HTMLInputElement).value = 'Meow';
    document.getElementById('filter-search')?.click();

    screen.getByText('Meow');

});