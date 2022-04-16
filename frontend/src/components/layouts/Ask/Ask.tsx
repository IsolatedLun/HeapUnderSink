import React, { useState } from 'react'
import Form from '../../Forms/Form';
import { useForm } from '../../Forms/formHooks'
import SubmitButton from '../../Modules/Buttons/SubmitButton';
import { askConfig } from './askConfig'

const Ask = () => {
  const [question, setQuestion] = useState(askConfig.formObj);
  const [fields, isValidForm] = useForm(askConfig.inputs, setQuestion, question);

  return (
    <Form onSubmit={() => console.log(question)}>
      { fields }

      <SubmitButton isDead={!isValidForm}>Ask</SubmitButton>
    </Form>
  )
}

export default Ask