import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './style.css';

const styles = {
    padding: 10,
    margin: 5
}

const Home = () => {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const [createUser, { err, info }] = useMutation(CREATE_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const signupForm = async (event) => {
        event.preventDefault();
        console.log(formState)
        try {
            const { data } = await createUser({
                variables: { ...formState }
            })
            Auth.login(data.createUser.token)
        } catch (err) {
            console.error(err)
        }
        setFormState({
            username: '',
            password: '',
        });
    }

    const submitForm = async (event) => {
        event.preventDefault();
        console.log(formState)
        try {
            const { data } = await login({
                variables: { ...formState }
            })
            Auth.login(data.login.token)
        } catch (error) {
            console.error(error)
        }
        setFormState({
            username: '',
            password: '',
        });
    }

    return (
        <div id='testcss'>
            <h2 style={styles}>Welcome to Online Chemistry Practice!</h2>
            <form style={styles} id='testcss' onSubmit={submitForm}>
                <h3 style={styles}>Login</h3>
                <label htmlFor='login-username' style={styles}>Username</label>
                <input id="login-username" type={'text'} name='username' style={styles} onChange={handleChange} value={formState.username}></input>
                <label htmlFor='login-password' style={styles}>Password</label>
                <input id="login-password" type={'password'} name='password' style={styles} onChange={handleChange} value={formState.password}></input>
                <button style={styles} type='submit'>Login</button>
            </form>
            <h3 style={styles}>New here?</h3>
            <form style={styles} onSubmit={signupForm}>
                <h3 style={styles}>Signup</h3>
                <label htmlFor='signup-username' style={styles}>Username</label>
                <input id="signup-username" type={'text'} name='username' style={styles} onChange={handleChange} value={formState.username}></input>
                <label htmlFor='signup-password' style={styles}>Password</label>
                <input id="signup-password" type={'password'} name='password' style={styles} onChange={handleChange} value={formState.password}></input>
                <button style={styles} type='submit'>Signup</button>
            </form>
        </div>
    )
};

export default Home;