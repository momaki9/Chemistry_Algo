const styles = {
    padding: 10,
    margin: 5
}

const Home = () => {

    const userF = (event) => {
        event.preventDefault();
        console.log('hi')
    }
    
    return (
        <>
            <h2 style={styles}>Welcome to Online Chemistry Practice!</h2>
            <form style={styles}>
                <h3 style={styles}>Login</h3>
                <label htmlFor='login-username' style={styles}>Username</label>
                <input id="login-username" type={'text'} name='username' style={styles}></input>
                <label htmlFor='login-password' style={styles}>Password</label>
                <input id="login-password" type={'password'} name='password' style={styles}></input>
                <button style={styles} onClick={userF}>Login</button>
            </form>
            <h3 style={styles}>New here?</h3>
            <form style={styles}>
                <h3 style={styles}>Signup</h3>
                <label htmlFor='signup-username' style={styles}>Username</label>
                <input id="signup-username" type={'text'} name='username' style={styles}></input>
                <label htmlFor='signup-password' style={styles}>Password</label>
                <input id="signup-password" type={'password'} name='password' style={styles}></input>
                <button style={styles} onClick={userF}>Signup</button>
            </form>
        </>
    )
};

export default Home;