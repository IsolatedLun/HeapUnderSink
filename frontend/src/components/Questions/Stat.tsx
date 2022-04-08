import { humanizeNumber } from "../../utilFuncs/utils"
import { INF_Stat } from "./types";

export function decorateStat(statNum: number | string, statName: string): string {
    statNum = Number(statNum);
   
    if(statName === 'views' && statNum >= 1000)
        return 'popular';
    else if(statName === 'answers' && statNum > 0)
        return 'answering';
    else if(statName === 'votes' && statNum >= 1000)
        return 'popular';
    
    return 'default';
}

export const Stat = ({ stat } : { stat: INF_Stat }) => {
    return (
        <div className="[ question__stat ]" data-stat-variant={decorateStat(stat.num, stat.name)}>
            <p className="[ stat__num ]">{ humanizeNumber(stat.num) }</p>
            <p>{ stat.name }</p>
        </div>
    )
}