import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './style.css';

const Home = () => {

    const [loginState, setLoginState] = useState({ username: '', password: '' });
    const [signupState, setSignupState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const [createUser, { err, info }] = useMutation(CREATE_USER);

    const loginChange = (event) => {
        const { name, value } = event.target;
        setLoginState({
            ...loginState,
            [name]: value,
        });
    }
    const signupChange = (event) => {
        const { name, value } = event.target;
        setSignupState({
            ...signupState,
            [name]: value,
        });
    }

    const signupForm = async (event) => {
        event.preventDefault();
        try {
            const { data } = await createUser({
                variables: { ...signupState }
            })
            Auth.login(data.createUser.token)
        } catch (err) {
            console.error(err)
        }
        setSignupState({
            username: '',
            password: '',
        });
    }

    const loginForm = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...loginState }
            })
            Auth.login(data.login.token)
        } catch (error) {
            console.error(error)
        }
        setLoginState({
            username: '',
            password: '',
        });
    }

    return (
        <div id='form-page'>
            <h2 id='heading'>Welcome to Online Chemistry Practice!</h2>
            <form onSubmit={loginForm} id='login-form'>
                <h3  >Login</h3>
                <label htmlFor='login-username' className='form-label'>Username</label>
                <input id="login-username" type={'text'} name='username' onChange={loginChange} value={loginState.username}></input>
                <label htmlFor='login-password' className='form-label'>Password</label>
                <input id="login-password" type={'password'} name='password' onChange={loginChange} value={loginState.password}></input>
                <button type='submit' className='btn'>Login</button>
            </form>
            <h3  >New here? Signup below!</h3>
            <form onSubmit={signupForm} id='signup-form'>
                <label htmlFor='signup-username' className='form-label'>Username</label>
                <input id="signup-username" type={'text'} name='username' onChange={signupChange} value={signupState.username}></input>
                <label htmlFor='signup-password' className='form-label' >Password</label>
                <input id="signup-password" type={'password'} name='password' onChange={signupChange} value={signupState.password}></input>
                <button type='submit' className='btn'>Signup</button>
            </form>
        </div>
    )
};

export default Home;