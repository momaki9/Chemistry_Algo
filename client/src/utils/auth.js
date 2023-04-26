import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/topics')
    }

    loggedIn() {
        const token = this.getToken();
        return token ? true : false;
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/')
    }
}

export default new AuthService();