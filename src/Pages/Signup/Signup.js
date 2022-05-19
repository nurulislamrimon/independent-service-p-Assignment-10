import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../Utilities/SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [check, setCheck] = useState(false);
    const [newError, setNewError] = useState('');
    const [logedUser] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const [updateProfile, updating] = useUpdateProfile();


    const formSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newPassword = e.target.newPassword.value;
        const reTypePassword = e.target.reTypePassword.value;
        if (newPassword !== reTypePassword) {
            setNewError("Both password didn't matched")
            return;
        }
        if (newPassword.length < 6) {
            setNewError("Enter at least 6 digit password")
            return;
        }
        await createUserWithEmailAndPassword(email, newPassword)
        await sendEmailVerification();
        await updateProfile({ displayName: name })
    }
    logedUser && navigate(from, { replace: true })
    return (
        <div className='form-container mx-auto p-5'>
            <h1 className='text-center'>Sign up</h1>
            <Form onSubmit={formSubmit}>

                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Nurul Islam" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="example@gmail.com" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" name='newPassword' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re-type Password</Form.Label>
                    <Form.Control type="password" name='reTypePassword' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className={!check ? 'text-danger' : 'text-primary'} onClick={() => setCheck(!check)} />
                </Form.Group>
                <p className="warning text-center">
                    {error || newError || verificationError && error.message || newError || verificationError}
                </p>
                <Button variant="dark" type="submit" className='d-block mx-auto' disabled={!check}>
                    Submit
                </Button>
                <div className="d-flex align-items-center mt-2">
                    <hr className='w-50' /> <span className='px-2'>or</span> <hr className='w-50' />
                </div>
                <SocialLogin></SocialLogin>
                <p className='text-center mt-3'>Are you a member? <span className='toggle-link' onClick={() => navigate('/login')}>Log in</span></p>
            </Form>
        </div>
    );
};

export default Signup;