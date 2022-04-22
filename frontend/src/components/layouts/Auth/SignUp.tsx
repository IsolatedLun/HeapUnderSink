import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../services/authService';
import { errorResponse } from '../../../services/responseFuncs';
import Form from '../../Forms/Form';
import { signUpConfig } from '../../Forms/FormConfigs';
import { useForm } from '../../Forms/formHooks';
import { INF_SignUp } from '../../Forms/types';
import { constructFormData } from '../../Forms/utilFuncs';
import SubmitButton from '../../Modules/Buttons/SubmitButton';
import Welcome from './Welcome';

const SignUp = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<INF_SignUp>(signUpConfig.formObj);
    const [fields, isValidForm] = useForm(signUpConfig.inputs, setNewUser, newUser);
    const [register] = useRegisterMutation();

    function handleSignUp() {
        register(constructFormData(newUser)!).unwrap()
            .then(res => navigate('/login'))
            .catch(res => errorResponse('Something went wrong.'));
    }

    return (
        <div className='[ flex flex-col margin-block-auto padding-block-1 ]'>
            <Welcome title='Sign up to HeapUndersink'>
                <p className="[ text-muted ]">The place where you can ask any questions.</p>
            </Welcome>

            <Form onSubmit={() => handleSignUp()} variant='difference'>
                { (fields) }  
                <SubmitButton isDead={!isValidForm}>Sign up</SubmitButton>
            </Form>
        </div>
    )
}

export default SignUp;