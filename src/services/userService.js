import axios from 'axios';
import authHeader from './authHeader';
import http from "./axios";


class UserService {
  
  getPublicContent() {
    return axios.get( 'all');
  }
  getUser(email) {
    return http.get(`/user/${email}`);
  
  }
  getUsername(username) {
    return http.get(`/username/${username}`);
  
  }

  getApporteurBoard() {
    return http.get('/apporteur',{ headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get('admin', { headers: authHeader() });
  }
}

export default new UserService();
