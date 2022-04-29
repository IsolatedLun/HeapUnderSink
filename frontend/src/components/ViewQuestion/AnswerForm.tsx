import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLoggedActions } from '../../hooks/useLoggedActions';
import { usePostAnswerMutation } from '../../services/questionsService';
import { errorResponse } from '../../services/responseFuncs';
import Form from '../Forms/Form';
import { useForm } from '../Forms/formHooks';
import SubmitButton from '../Modules/Buttons/SubmitButton';
import { INF_Question } from '../Questions/types';
import { answerConfig } from './formConfigs';
import { INF_Answer, INF_AnswerForm, INF_AnswerFormProps } from './types';

const AnswerForm = (props: INF_AnswerFormProps) => {
  const [user] = useAuth();
  const [postAnswer] = usePostAnswerMutation();
  const [answer, setAnswer] = useState<INF_AnswerForm>(answerConfig.formObj);
  const [form, isValidForm] = useForm(answerConfig.inputs, setAnswer, answer);
  const [handleSubmitAnswerCb] = useLoggedActions(handleSubmitAnswer);

  useEffect(() => {
    if(props.replyingTo && props.replyingTo.length > 0)
      document.getElementById('answer-form')!.scrollIntoView();
  }, [props.replyingTo])

  function handleSubmitAnswer() {
    setAnswer(prevState => ({ ...prevState, replyingTo: props.replyingTo! }));

    postAnswer({ answerData: answer, questionId: props.question.id })
      .unwrap()
      .then(res => {
        props.setQuestion((prevState: INF_Question) => {
          const newAnswer: INF_Answer = {
            id: -1,
            question: props.question.id,
            questionUserId: props.question.user.id,
            body: answer.answer,
            is_answer: false,
            votes: 0,
            user: user,
            rate_type: 'neutral',
            showControls: false,
            setReplyingTo: props.setReplyingTo
          }
          
          return { ...prevState, answers: [ ...prevState.answers as INF_Answer[], newAnswer ] };
        })
    
        setAnswer({ answer: '', replyingTo: '' });
      })
      .catch(res => errorResponse('Someting went wrong, try answering later.'))
  }

  return (
    <Form onSubmit={() => handleSubmitAnswerCb()} id='answer-form'>
      { form }
      <SubmitButton isDead={!isValidForm}>Post</SubmitButton>
      {
        props.replyingTo && (
          <p className='[ fs-200 text-muted ]'>
            Replying to: <span className="tag">@{ props.replyingTo }</span>
          </p>
        )
      }
    </Form>
  )
}

export default AnswerForm;