import { useEffect, useMemo, useState } from "react";
import { INF_Question } from "../components/Questions/types";
import { INF_Answer, INF_RateObject, INF_RatingController } from "../components/ViewQuestion/types";

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
 * @param modelType -> "question" OR "answer"
 * @summary Handles the state of the votes of the model
 * @returns [rateControllerProps, rateObject, modelType, hasVoted].
*/
export function useRate(model: INF_Question | INF_Answer, dispatch: Function, 
    modelType: string): [INF_RatingController, INF_RateObject, string, boolean] {

    const [currType, setCurrType] = useState('none');
    const [actionType, setActionType] = useState('neutral');
    const [hasVoted, sethasVoted] = useState(false);

    useEffect(() => {
        if(model && actionType !== 'neutral') {
            setCurrType(processRate(currType, actionType, dispatch))
            setActionType('neutral')
            sethasVoted(true);
        }
    }, [actionType])

    useEffect(() => {
        if(model && currType === 'none')
            setCurrType(model.rate_type)
    }, [model])

    const props: INF_RatingController = {
        setRateType: setActionType,
        model: model,
        rateType: currType,
        modelType: modelType,
    }

    const rateObject: INF_RateObject = {
        id: model?.id,
        votes: model?.votes,
        model: modelType,
        rateType: currType
    }

    return [props, rateObject, actionType, hasVoted];
}