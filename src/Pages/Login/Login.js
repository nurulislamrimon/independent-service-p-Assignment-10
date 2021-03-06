import React, { useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../Utilities/SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [check, setCheck] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [logedUser] = useAuthState(auth);
    const [newError, setNewError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";

    const handleSetResetEmail = (e) => {
        setResetEmail(e.target.value);
    }
    const handleResetEmail = async (e) => {
        if (!resetEmail) {
            toast('Please enter an email address to reset your password!')
            return
        }
        await sendPasswordResetEmail(resetEmail);
        toast('Reset password mail has been sended!')
    }



    const formSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.newPassword.value;
        if (password.length < 6) {
            setNewError("Enter at least 6 digit password")
            return;
        }
        signInWithEmailAndPassword(email, password);
        if (!logedUser) {
            setNewError("user email address or password don't match")
            return;
        }
    }

    logedUser && navigate(from, { replace: true })
    return (
        <div className='form-container mx-auto p-5'>
            <h1 className='text-center'>Log in</h1>
            <Form onSubmit={formSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' onBlur={handleSetResetEmail} placeholder="example@gmail.com" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='newPassword' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className={!check ? 'text-danger' : 'text-primary'} onClick={() => setCheck(!check)} />
                </Form.Group>

                <p className="warning text-center">
                    {error || newError && error.message || newError}
                </p>
                <Button variant="dark" type="submit" className='d-block mx-auto' disabled={!check}>
                    Submit
                </Button>
                <div className="d-flex align-items-center mt-2">
                    <hr className='w-50' /> <span className='px-2'>or</span> <hr className='w-50' />
                </div>
                <SocialLogin></SocialLogin>
                <p className='text-center mt-3'>Forgot password? <span className='reset-link' onClick={handleResetEmail}>Reset password</span></p>
                <p className='text-center mt-3'>You don't have a account! <span className='toggle-link' onClick={() => navigate('/signup')}>Sign up</span></p>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;