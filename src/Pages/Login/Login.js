import React, { useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../Utilities/SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [check, setCheck] = useState(false);
    const [logedUser] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const formSubmit = (e) => {
        e.preventDefault();
    }

    logedUser && navigate(from, { replace: true })
    return (
        <div className='form-container mx-auto p-5'>
            <h1 className='text-center'>Log in</h1>
            <Form onSubmit={formSubmit}>
                <SocialLogin></SocialLogin>
                <div className="d-flex align-items-center mt-2">
                    <hr className='w-50' /> <span className='px-2'>or</span> <hr className='w-50' />
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className={!check ? 'text-danger' : 'text-primary'} onClick={() => setCheck(!check)} />
                </Form.Group>
                <Button variant="dark" type="submit" className='d-block mx-auto' disabled={!check}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;