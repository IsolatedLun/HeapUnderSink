import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePostAskQuestionMutation } from '../../../services/questionsService';
import Form from '../../Forms/Form';
import { useForm } from '../../Forms/formHooks'
import SubmitButton from '../../Modules/Buttons/SubmitButton';
import { askConfig } from './askConfig'

const Ask = () => {
  const navigate = useNavigate();
  const [askQuetion] = usePostAskQuestionMutation();
  const [question, setQuestion] = useState(askConfig.formObj);
  const [fields, isValidForm] = useForm(askConfig.inputs, setQuestion, question);

  function handleAskQuestion() {
    askQuetion(question)
      .unwrap()
      .then(res => navigate(`/questions/${res.id}/${res.title}`))
  }

  return (
    <Form onSubmit={() => handleAskQuestion()}>
      { fields }

      <SubmitButton isDead={!isValidForm}>Ask</SubmitButton>
    </Form>
  )
}

export default Ask