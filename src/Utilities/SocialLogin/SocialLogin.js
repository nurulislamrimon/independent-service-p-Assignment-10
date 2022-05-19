import React from 'react';
import googleIcon from '../../icons/google-icon.webp';
import githubIcon from '../../icons/github-icon.webp';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleuser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    return (
        <div>
            <button className='btn btn-dark mx-auto d-block' onClick={() => signInWithGoogle()}> <img src={googleIcon} height={30} alt="" className='m-2' /> Google Authentication</button>
            <br />

            <button className='btn btn-dark mx-auto d-block' onClick={() => signInWithGithub()}> <img src={githubIcon} style={{ backgroundColor: 'white', borderRadius: '50%' }} height={30} alt="" className='m-2' /> Google Authentication</button>
        </div>
    );
};

export default SocialLogin;