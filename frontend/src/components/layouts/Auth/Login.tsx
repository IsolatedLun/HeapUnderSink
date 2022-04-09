import { useState } from 'react';
import Form from '../../Forms/Form';
import { loginConfig } from '../../Forms/FormConfigs';
import { useForm } from '../../Forms/formHooks';
import SubmitButton from '../../Modules/Buttons/SubmitButton';

const Login = () => {
    const [newUser, setNewUser] = useState(loginConfig.formObj)
    const [fields, isValidForm] = useForm(loginConfig.inputs, setNewUser, newUser);

    return (
        <div className='[ grid-split margin-block-auto padding-block-1 ]'>
            <Form onSubmit={() => null}>
                { (fields) }  
                <SubmitButton props={{ rest: {'data-dead': !isValidForm} }}>Log in</SubmitButton>
            </Form>

            <div className="[ welcome ] [ flex-center flex-col text-center margin-block-auto ]">
                <h1 className='header-700'>Welcome to HeapUndersink</h1>
                <p className='text-muted'>A place where you can ask any question</p>
            </div>
        </div>
    )
}

export default Login