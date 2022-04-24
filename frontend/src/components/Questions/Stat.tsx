import { humanizeNumber } from "../../utilFuncs/utils"
import { INF_Stat } from "./types";

/**
 * @param statName -> Name of the stat.
 * @param statNum -> Aggregate of the stat.
 * @returns A specific string depending on the 2 parameters.
 * @example decorateStat(1001, "views") => "popular"
 * decorateStat(999, "views") => "default"
*/
export function decorateStat(statNum: number | string, statName: string, isAnswer?: boolean): string {
    statNum = Number(statNum);
   
    if(statName === 'views' && statNum >= 1000)
        return 'popular';
    else if(statName === 'answers' && statNum > 0) {
        if(isAnswer)
            return 'answered';
        return 'answering';
    }
        
    else if(statName === 'votes' && statNum >= 1000)
        return 'popular';
    
    return 'default';
}

export const Stat = (props: INF_Stat) => {
    return (
        <div className="[ question__stat ]" data-stat-variant={decorateStat(props.num, props.name, props?.bool)}>
            <p className="[ stat__num ]">{ humanizeNumber(props.num) }</p>
            <p>{ props.name }</p>
        </div>
    )
}