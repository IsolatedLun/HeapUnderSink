import { render, screen } from '@testing-library/react';
import 'jest';
import Questions from '../Questions';
import { INF_Question } from '../types';

test('Display questions with no data', () => {
    render(<Questions questions={[]} />);

    screen.getByText(/'no questions found.'/i);
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

    render(<Questions questions={[question]} />);

    screen.getByText(/'A question'/i);
    
    const votes = screen.getByText(/'votes'/i).parentElement;
    expect(votes?.getAttribute('data-stat-variant')).toBe('popular');
});
