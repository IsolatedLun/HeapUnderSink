import { useState } from 'react';
import { useLoginMutation } from '../../../services/authService';
import Form from '../../Forms/Form';
import { loginConfig } from '../../Forms/FormConfigs';
import { useForm } from '../../Forms/formHooks';
import { INF_Login } from '../../Forms/types';
import SubmitButton from '../../Modules/Buttons/SubmitButton';

const Login = () => {
    const [newUser, setNewUser] = useState<INF_Login>(loginConfig.formObj)
    const [fields, isValidForm] = useForm(loginConfig.inputs, setNewUser, newUser);
    const [login] = useLoginMutation();

    function handleLogin() {
        login(newUser).unwrap()
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className='[ grid-split margin-block-auto padding-block-1 ]' data-reset-grid-colums-mobile>
            <Form onSubmit={() => handleLogin()}>
                { (fields) }  
                <SubmitButton rest={{ 'data-dead': isValidForm }}>Log in</SubmitButton>
            </Form>

            <div className="[ welcome ] [ flex-center flex-col text-center margin-block-auto ]" data-desktop>
                <h1 className='header-700'>Welcome to HeapUndersink</h1>
                <p className='text-muted'>A place where you can ask any question</p>
            </div>
        </div>
    )
}

export default Login