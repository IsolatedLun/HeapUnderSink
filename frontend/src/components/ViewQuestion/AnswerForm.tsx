import React, { useState } from 'react';
import Form from '../Forms/Form';
import { useForm } from '../Forms/formHooks';
import SubmitButton from '../Modules/Buttons/SubmitButton';
import { answerConfig } from './formConfigs';

const AnswerForm = () => {
    const [answer, setAnswer] = useState(answerConfig.formObj);
    const [form, isValidForm] = useForm(answerConfig.inputs, setAnswer, answer);

  return (
    <Form onSubmit={() => null}>
      { form }
      <SubmitButton isDead={!isValidForm}>Post</SubmitButton>
    </Form>
  )
}

export default AnswerForm;