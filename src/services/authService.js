import axios from "axios";
import {useState, useEffect} from 'react'
const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("id", JSON.stringify(response.data.id))
          localStorage.setItem("role", JSON.stringify(response.data.roles))
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  }

  register(username, email, password,role,adresse,telephone,type,nomAgence,nomSociete,siret,numCarteT,CCI,ville,codePostal,dateDeNaissance){
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      role,
      adresse,telephone,type,nomAgence,nomSociete,siret,numCarteT,CCI,ville,codePostal,dateDeNaissance,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getUserRole() {
    return JSON.parse(localStorage.getItem('role'));
  
  
}
isLogged(){
  if(JSON.parse(localStorage.getItem('user'))){
    return true;
  }
  return false;
}
isApporteur(){
  if (this.getUserRole()=="ROLE_APPORTEUR"){
    return true;
  }
  else
  return false;
}
isPartenaire(){
  if (this.getUserRole()=="ROLE_PARTENAIRE"){
    return true;
  }
  else
  return false;
}
isAdmin(){
  if (this.getUserRole()=="ROLE_ADMIN"){
    return true;
  }
  else
  return false;
}
}

export default new AuthService();