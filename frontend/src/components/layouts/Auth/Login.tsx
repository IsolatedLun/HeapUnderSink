import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks';
import { loginAction } from '../../../features/user-slice';
import { useLoginMutation } from '../../../services/authService';
import { errorResponse } from '../../../services/responseFuncs';
import Form from '../../Forms/Form';
import { loginConfig } from '../../Forms/FormConfigs';
import { useForm } from '../../Forms/formHooks';
import { INF_Login } from '../../Forms/types';
import SubmitButton from '../../Modules/Buttons/SubmitButton';
import Welcome from './Welcome';

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useState<INF_Login>(loginConfig.formObj)
    const [fields, isValidForm] = useForm(loginConfig.inputs, setLoggedUser, loggedUser);
    const [login] = useLoginMutation();

    function handleLogin() {
        login(loggedUser).unwrap()
            .then(res => { 
                dispatch(loginAction(res)); 
                navigate('/');
            })
            .catch(res => errorResponse('Invalid email or password.'));
    }

    return (
        <div className='[ flex flex-col margin-block-auto padding-block-1 ]'>
            <Welcome title='Login to HeapUndersink' />

            <Form onSubmit={() => handleLogin()}>
                { (fields) }  
                <SubmitButton isDead={!isValidForm}>Log in</SubmitButton>
            </Form>
        </div>
    )
}

export default Login;