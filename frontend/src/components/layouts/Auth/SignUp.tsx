import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../../services/authService'
import { errorResponse } from '../../../services/responseFuncs'
import Form from '../../Forms/Form'
import { signUpConfig } from '../../Forms/FormConfigs'
import { useForm } from '../../Forms/formHooks'
import { INF_SignUp } from '../../Forms/types'
import { constructFormData } from '../../Forms/utilFuncs'
import SubmitButton from '../../Modules/Buttons/SubmitButton'

const SignUp = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<INF_SignUp>(signUpConfig.formObj)
    const [fields, isValidForm] = useForm(signUpConfig.inputs, setNewUser, newUser);
    const [register] = useRegisterMutation();

    function handleSignUp() {
        register(constructFormData(newUser)!).unwrap()
            .then(res => navigate('/login'))
            .catch(res => errorResponse('Something went wrong.'))
    }

    return (
        <Form onSubmit={() => handleSignUp()}>
            { fields }

            <SubmitButton isDead={!isValidForm}>
                Sign up
            </SubmitButton>
        </Form>
    )
}

export default SignUp;