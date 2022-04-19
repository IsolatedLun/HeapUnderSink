import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
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

  function handleSubmitAnswer() {
    postAnswer({ answerData: answer, questionId: props.questionId })
      .unwrap()
      .then(res => {
        props.setQuestion((prevState: INF_Question) => {
          const newAnswer: INF_Answer = {
            body: answer.answer,
            is_answer: false,
            votes: 0,
            user: user,
            rateType: 'neutral'
          }
          
          return { ...prevState, answers: [ ...prevState.answers as INF_Answer[], newAnswer ] };
        })
    
        setAnswer({ answer: '' });
      })
      .catch(res => errorResponse('Someting went wrong, try answering later.'))
  }

  return (
    <Form onSubmit={() => handleSubmitAnswer()}>
      { form }
      <SubmitButton isDead={!isValidForm}>Post</SubmitButton>
    </Form>
  )
}

export default AnswerForm;