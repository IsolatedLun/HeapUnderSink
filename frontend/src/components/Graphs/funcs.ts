import { INF_Question } from "../Questions/types";

export function createCubeGraphData(data: any[], dateKey: string): [object, number] {
    function getDaysInMonth(): [number, number] {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();

        return [new Date(year, month, 0).getDate(), month];
    }

    const days: any = {};
    const [daysInMonth, currMonth] = getDaysInMonth();

    for(let i = 1; i < daysInMonth; i++) {
        days[i] = 0;
    }

    data.forEach(obj => {
        const date = new Date(obj[dateKey]);
        const day = date.getDate();

        days[day]++;
    })

    return [days, currMonth];
}

const arr: any[] = [
    { 
        quasar_radius: '10^^^^^^1002',
        quasar_name: 'EXT-90',
        created_at: new Date() 
    }
]

const [cubeGraphData, month] = createCubeGraphData(arr, 'created_at');
console.log(cubeGraphData)