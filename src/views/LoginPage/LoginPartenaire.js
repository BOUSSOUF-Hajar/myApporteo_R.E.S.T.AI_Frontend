import React from "react";
import { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import {Email,Phone} from "@material-ui/icons";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";
import { ValidatorForm, TextValidator,SelectValidator} from 'react-material-ui-form-validator';
import { isEmail } from "validator";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import AuthService from "../../services/authService";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import { Link } from "react-router-dom";


const useStyles = makeStyles(styles);
const email = value => {
  if (!isEmail(value)) {
    return false;
  }
  return true;
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return false;
  }return true;
};
export default class LoginApp extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      telephone:"",
      password: "",
      successful: false,
      message: ""
    };
  }

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value});
  }
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('require', (value) => {
      if (!value) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule('vPassword',vpassword);
    ValidatorForm.addValidationRule('vEmail',email);
    
}

handleLogin(e) {
  e.preventDefault();

  this.setState({
    message: "",
    loading: true
  });

  
    AuthService.login(this.state.username, this.state.password).then(
     ()=>{
       window.location.href = "/";
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  
}
  render (){
    return (
    <div>
       <div>
       <Header
        brand="Immo"
        rightLinks={<HeaderLinks />}
        fixed
        color="Black"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
       
      />
      </div>
      <div
        style={styles.pageHeader}
        style={{
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div style={styles.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card>
              <ValidatorForm
                style={styles.form}   onSubmit={this.handleLogin}
            >
                  <CardHeader  style={styles.cardHeader}>
                    <h3   style={styles.h3}>Connexion</h3>
                    
            
                  </CardHeader>
                 
                  <CardBody>
                 
                    
                  <h5  style={styles.h5}> Email :</h5>
                    <TextValidator
                    style={{width:"100%"}}
                      name="username"
                        type= "email"
                        onChange={this.handleChange}
                        value={this.state.username}
                        validators={['require','vEmail']}
                        errorMessages={[ 'Ce champ est obligatoire',"Ce mail n'est valide"]}
                        
                       
                    />
                   <h5  style={styles.h5}> Mot de passe :
                   </h5>
                    <TextValidator
                    style={{width:"100%"}}
                     name="password"
                       type="password"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={this.state.password}
                        validators={['required','vPassword']}
                        errorMessages={['Ce champ est obligatoire','Le mot de passe doit être compris entre 6 et 40 caractères.']}
                        
                        />
                   
                  </CardBody>
                  <CardFooter  style={styles.cardFooter}>
                  <Button type="submit" target="_blank" size="lg" style={styles.button}>Se connecter</Button>
                  <Link to={"/partenaire/inscription"}>
                  <Button  style={styles.buttonInsc} target="_blank" size="lg">
                      S'inscrire
                    </Button></Link>
                  </CardFooter>
                  {this.state.message}
                </ValidatorForm>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
      </div>
      <Footer 
         />
    </div>
      )  }
}
