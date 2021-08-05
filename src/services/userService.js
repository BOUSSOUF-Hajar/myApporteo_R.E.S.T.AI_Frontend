import axios from 'axios';
import authHeader from './authHeader';
import http from "./axios";


class UserService {
  
  getPublicContent() {
    return axios.get( 'all');
  }
  getUsername(email) {
    return http.get(`/user/${email}`);
  
  }
  

  getApporteurBoard() {
    return http.get('/test/apporteur',{ headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get('admin', { headers: authHeader() });
  }
}

export default new UserService();
