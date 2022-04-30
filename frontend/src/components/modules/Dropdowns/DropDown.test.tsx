import { render, screen } from '@testing-library/react';
import 'jest';
import ReactDOM  from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import DropDownContainer from './DropDownContainer';
import DropDownItem from './DropDownItem';

let container: HTMLDivElement | null = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container!);
    container = null;
  });

test('Open a dropdown', () => {
    render(
        <DropDownContainer item={<p>Button</p>}>
            <DropDownItem>
                Item 1
            </DropDownItem>
        </DropDownContainer>
    )

    expect(document.documentElement.outerHTML.includes('Item 1')).toBe(false);

    const btn = screen.getByText('Button');
    act(() => {
        btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    })

    screen.getByText('Item 1');
});