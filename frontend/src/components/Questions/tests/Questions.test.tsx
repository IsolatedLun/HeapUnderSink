import { render, screen } from '@testing-library/react';
import 'jest';
import { BrowserRouter } from 'react-router-dom';
import Questions from '../Questions';
import { INF_Question } from '../types';

test('Display questions with no data', () => {
    render(
        <BrowserRouter>
            <Questions questions={[]} sortBy='' />
        </BrowserRouter>
    );

    screen.getByText('No questions found.');
});

test('Display questions with data', () => {
    const question: INF_Question = {
        id: 1,
        answers: 0,
        views: 0,
        votes: 1000,
        answered: false,
        created_at: new Date(),
        modified_at: new Date(),
        title: 'A question',
        tags: [],
        body: '',
        user: {
            id: 1,
            profile: '',
            reputation: 250,
            username: 'A user'
        }
    }

    render(
        <BrowserRouter>
            <Questions questions={[question]} sortBy='' />
        </BrowserRouter>
    );

    screen.getByText('A question');
    
    const votes = screen.getByText('votes').parentElement;
    expect(votes?.getAttribute('data-stat-variant')).toBe('popular');
});
