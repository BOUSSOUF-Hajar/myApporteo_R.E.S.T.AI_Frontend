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
import { withStyles } from '@material-ui/core/styles';
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import UserService from "../../services/userService";
import AuthService from "../../services/authService";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import { Link } from "react-router-dom";
const username = localStorage.getItem('username');

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
let timer = null;
 class LoginApp extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:"",
      username:"",
      telephone:"",
      password: "",
      successful: false,
      message: "",
      cardAnimation:"cardHidden"
    };
  }

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value});
  }
  componentDidMount() {
    timer = setTimeout(() => { this.setState({cardAnimation:""})}, 700)
   
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

  
    AuthService.login(this.state.email, this.state.password).then(
     ()=>{
       window.location.href = "/";
      },
      error => {
        
        this.setState({
          
          message: "Une erreur s'est produite, Veuillez réessayer"
        });
      }
    );
  
}
  render (){
    const { classes } = this.props;
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
        className={classes.pageHeader}
        style={{
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container} >
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={6}>
              <Card className={classes[this.state.cardAnimation]}>
              <ValidatorForm
                className={classes.form}   onSubmit={this.handleLogin}
            >
                  <CardHeader  className={classes.cardHeader}>
                    <h3   className={classes.h3}>Connexion</h3>
                    
            
                  </CardHeader>
                 
                  <CardBody>
                 
                    
                  <h5  className={classes.h5}> Email :</h5>
                    <TextValidator
                    style={{width:"100%"}}
                      name="email"
                        type= "email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        validators={['require','vEmail']}
                        errorMessages={[ 'Ce champ est obligatoire',"Ce mail n'est valide"]}
                        
                       
                    />
                   <h5  className={classes.h5}> Mot de passe :
                   </h5>
                    <TextValidator
                     name="password"
                       type="password"
                        autoComplete="off"
                        style={{width:"100%"}}
                        onChange={this.handleChange}
                        value={this.state.password}
                        validators={['required','vPassword']}
                        errorMessages={['Ce champ est obligatoire','Le mot de passe doit être compris entre 6 et 40 caractères.']}
                        
                        />
                   
                  </CardBody>
                  <CardFooter  className={classes.cardFooter}>
                  <Button type="submit"  target="_blank" className={classes.button}>Se connecter</Button>
                  <Link to={"/apporteur/inscription"}>
                  <Button  target="_blank" size="lg" className={classes.buttonInsc}>
                      S'inscrire
                    </Button></Link>
                  </CardFooter>
                  <h4 style={{color:"red"}}>
                  {this.state.message}</h4>
                  
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

export default withStyles(styles) (LoginApp);