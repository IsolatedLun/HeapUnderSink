import { useState } from 'react';
import Form from '../../Forms/Form';
import { loginConfig } from '../../Forms/FormConfigs';
import { useForm } from '../../Forms/formHooks';
import SubmitButton from '../../Modules/Buttons/SubmitButton';

const Login = () => {
    const [newUser, setNewUser] = useState(loginConfig.formObj)
    const [fields, isValidForm] = useForm(loginConfig.inputs, setNewUser, newUser);

    return (
        <Form onSubmit={() => null}>
            { (fields) }  
            <SubmitButton props={{ rest: {'data-dead': !isValidForm} }}>Log in</SubmitButton>
        </Form>
    )
}

export default Login