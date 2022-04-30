import { render, screen } from '@testing-library/react';
import 'jest';
import { monthNames } from '../../consts';
import CubeGraph from './CubeGraph/CubeGraph';
import { createCubeGraphData } from './funcs';
import { INF_CubeGraph } from './types';

test('Display CubeGraph with data', () => {
    const date = new Date();
    const day = new Date().getDate();

    // Random data that has a date.
    const arr: any[] = [
        { 
            quasar_radius: '10^^^^^^1002',
            quasar_name: 'EXT-90',
            created_at: date
        }
    ]

    render(
        <CubeGraph data={arr} dateKey='created_at' />
    );

    const [cubeGraphData, month] = createCubeGraphData(arr, 'created_at');
    
    // Getting the specific cube of said date.
    const cube = document.getElementById(`cube-${day}-${month}`);
    
    expect(cube?.textContent).toBe(`1 queries on ${monthNames[month]} ${day}`);
});