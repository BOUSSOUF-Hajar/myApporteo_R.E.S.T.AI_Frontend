import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Component } from "react";
import UserService from "../../services/userService";
import AuthService from "../../services/authService";
const user = localStorage.getItem('user');
const role = localStorage.getItem('role');

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      isApporteur:false,
      isPartenaire:false,
    };
  }

  componentDidMount() {
    this.setState({isApporteur:AuthService.isApporteur()})
    this.setState({isPartenaire:AuthService.isPartenaire()})
    UserService.getApporteurBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
         
        </header>
        
        {this.state.content}
      </div>
    );
  }
  
}
