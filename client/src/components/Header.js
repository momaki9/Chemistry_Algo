import Auth from '../utils/auth'

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <>
            <h1>Chapter 3: Molarity</h1>
            {Auth.loggedIn() ? (
                <>
                    <button onClick={logout}>Logout</button>
                </>

            ) : (
                <>
                </>
            )}

        </>
    )
};

export default Header;