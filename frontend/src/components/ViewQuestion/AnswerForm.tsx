import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLoggedActions } from '../../hooks/useLoggedActions';
import { usePostAnswerMutation } from '../../services/questionsService';
import { errorResponse } from '../../services/responseFuncs';
import Form from '../Forms/Form';
import { useForm } from '../Forms/formHooks';
import SubmitButton from '../Modules/Buttons/SubmitButton';
import { INF_Question } from '../Questions/types';
import { shouldShowControls } from './Answer/funcs';
import { answerConfig } from './formConfigs';
import { INF_Answer, INF_AnswerForm, INF_AnswerFormProps } from './types';

const AnswerForm = (props: INF_AnswerFormProps) => {
  const [user] = useAuth();
  const [postAnswer] = usePostAnswerMutation();
  const [answer, setAnswer] = useState<INF_AnswerForm>(answerConfig.formObj);
  const [form, isValidForm] = useForm(answerConfig.inputs, setAnswer, answer);
  const [handleSubmitAnswerCb] = useLoggedActions(handleSubmitAnswer);

  function handleSubmitAnswer() {
    postAnswer({ answerData: answer, questionId: props.question.id })
      .unwrap()
      .then(res => {
        props.setQuestion((prevState: INF_Question) => {
          const newAnswer: INF_Answer = {
            id: -1,
            questionUserId: props.question.user.id,
            body: answer.answer,
            is_answer: false,
            votes: 0,
            user: user,
            rate_type: 'neutral',
            showControls: false,
          }
          
          return { ...prevState, answers: [ ...prevState.answers as INF_Answer[], newAnswer ] };
        })
    
        setAnswer({ answer: '' });
      })
      .catch(res => errorResponse('Someting went wrong, try answering later.'))
  }

  return (
    <Form onSubmit={() => handleSubmitAnswerCb()}>
      { form }
      <SubmitButton isDead={!isValidForm}>Post</SubmitButton>
    </Form>
  )
}

export default AnswerForm;