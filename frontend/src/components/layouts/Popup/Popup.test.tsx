import { render, screen } from '@testing-library/react';
import 'jest';
import { popup } from './funcs';
import Popup from './Popup';

test('Display popup on login error', () => {
    render(<Popup />);

    popup('Invalid email or password.', 'red');
    screen.getByText('Invalid email or password.');
});
