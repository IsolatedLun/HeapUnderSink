import { useEffect, useState } from "react";
import { INF_Question } from "../components/Questions/types";
import { INF_Answer, INF_RatingController } from "../components/ViewQuestion/types";

/**
 * @param currType
 * @param actionType
 * @param setModel
 * @summary Increments or decrements the state of the vote depending on the **action* and **type**.
*/
function processRate(currType: string, actionType: string, setModel: Function): string {
    function upvote() {
        setModel((prevState: INF_Question) => {
            let votes = prevState.votes + 1;

            if(currType === 'downvote')
                votes += 1;

            return { ...prevState, votes };
        })

        return 'upvote';
    }

    function downvote() {
        setModel((prevState: INF_Question) => {
            let votes = prevState.votes - 1;

            if(currType === 'upvote')
                votes -= 1;

            return { ...prevState, votes };
        })

        return 'downvote';
    }

    function unrate() {
        setModel((prevState: INF_Question) => {
            let votes = prevState.votes;

            if(actionType === 'downvote')
                votes += 1;
            else
                votes -= 1;

            return { ...prevState, votes };
        })

        return 'neutral';
    }
    

    if(currType === actionType)
        return unrate();
    else if(actionType === 'upvote')
        return upvote();
    else
        return downvote();
}

/**
 * @param model
 * @param setModel
 * @param modelType -> "quetion" OR "answer"
 * @returns Handles the state of the votes of the model and returns the props of the <RateController />.
*/
export function useRate(model: INF_Question | INF_Answer, setModel: Function, 
    modelType: string): [INF_RatingController, string] {

    const [currType, setCurrType] = useState(model?.rateType && 'neutral');
    const [actionType, setActionType] = useState('neutral');

    useEffect(() => {
        if(model && actionType !== 'neutral') {
            setCurrType(processRate(currType, actionType, setModel))
            setActionType('neutral')
        }
    }, [actionType])

    const props: INF_RatingController = {
        setRateType: setActionType,
        model: model,
        rateType: currType,
        modelType: modelType,
    }

    return [props, modelType];
}