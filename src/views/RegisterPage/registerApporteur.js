import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import {Email,Phone} from "@material-ui/icons";
import People from "@material-ui/icons/People";
// core components
import Form from "react-validation/build/form";
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator,SelectValidator} from 'react-material-ui-form-validator';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { isEmail } from "validator";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AuthService from "../../services/authService";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import { Component } from "react";
import userService from "../../services/userService";

var valid=null
var validU=null
const email = value => {
  if (!isEmail(value)) {
    return false;
  }
  return true;
};

const vusername = value => {
  if (value.length < 3 ) {
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
class RegisterApporteur extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nomAgence:"",
      username: "",
      nomSociete:"",
      email: "",
      Siret:"",
      CCI:"",
      type:"",
      numCarteT:"",
      adresse:"",
      ville:"",
      codePostal:"",
      telephone:"",
      password: "",
      passwordConf:"",
      dateDeNaissance:"",
      role:["apporteur"],
      successful: false,
      message: [],
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
    ValidatorForm.addValidationRule('emailExist',(value)=>{
      
      userService.getUser(value).then(response=>
        {
          if (response.data==true){
            
           
            valid=true;
          }
          else{
         
         valid=false;
          }
          
          
        });
       
     return valid;
    });
    ValidatorForm.addValidationRule('usernameExist',(value)=>{
      
      userService.getUsername(value).then(response=>
        {
          if (response.data==true){
            
           
            validU=true;
          }
          else{
         
         validU=false;
          }
          
          
        });
       
     return validU;
    });
    ValidatorForm.addValidationRule('vUsername',vusername);
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.password) {
          return false;
      }
      return true;
  });
}
handleDropDownChange(event) {
 
  this.setState({
    type: event.target.value
  });
}
  handleRegister=e=> {
    e.preventDefault();



      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.role,
        this.state.adresse,
        this.state.telephone,
        this.state.type,
        this.state.nomAgence,
        this.state.nomSociete,
        this.state.Siret,
        this.state.numCarteT,
        this.state.CCI,
        this.state.ville,
        this.state.codePostal,
        this.state.dateDeNaissance,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          window.location.href = "/apporteur/connexion";
        },
        error => {
        
          this.setState({
            
            message: "Une erreur s'est produite, Veuillez réessayer"
          });
        }
      );
    
  }

  render(){
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
        <div>
      <div  className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <Card  className={classes[this.state.cardAnimation]}>
              
            <ValidatorForm
                className={classes.form}   onSubmit={this.handleRegister}
            >
                  <CardHeader  className={classes.cardHeader}>
                    <h3   className={classes.h3}>Inscription</h3>
                    
            
                  </CardHeader>
                 
                  <CardBody>
                  <h5  className={classes.h5}> Vous ètes :</h5>
                  <SelectValidator name="type" value={this.state.type} style={{width:"80%",margin:"20px"}}
                  onChange={this.handleDropDownChange}>
                  <MenuItem value="Un particulier">Un particulier</MenuItem>
                  <MenuItem value="Un  professionnel">Un professionnel</MenuItem>
                 
       
                     </SelectValidator>
                    <h5  className={classes.h5}> Nom de l'utilisateur : </h5>
                    <TextValidator
                    style={{width:"80%",margin:"20px"}}
                      name="username"
                      validators={['required','vUsername','usernameExist']}
                      errorMessages={['Ce champ est obligatoire',"Le nom d’utilisateur doit être suppérieur à 3 caractères. ","Ce nom d'utilisateur est déja exist"]}
                     type="text"
                        onChange= {this.handleChange}
                        value={this.state.username}
                    />
                    <h5  className={classes.h5}> Date de naissance : </h5>
                           
                    <TextValidator
                      name="dateDeNaissance"
                      style={{width:"80%",margin:"20px"}}
                     type="date"
                        onChange= {this.handleChange}
                      
                        value={this.state.dateDeNaissance}
                       
                    />
                    <h5  className={classes.h5}> Ville de naissance : </h5>
                    <TextValidator
                      name="ville"
                      style={{width:"80%",margin:"20px"}}
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.ville}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                        
                  
                    />
                    
                     <h5  className={classes.h5}> Email :</h5>
                    <TextValidator
                      name="email"
                      style={{width:"80%",margin:"20px"}}
                     
                        type= "email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        validators={['require','vEmail','emailExist']}
                        errorMessages={[ 'Ce champ est obligatoire',"Ce mail n'est valide","Ce email est déja utilisé pour un autre compte ."]}
                        
                       
                    />
                     <h5  className={classes.h5}> Téléphone :</h5>
                    <TextValidator
                      name="telephone"
                      style={{width:"80%",margin:"20px"}}
                        type="phone"
                        onChange={this.handleChange}
                        value={this.state.telephone}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                    />
                   <h5  className={classes.h5}> Mot de passe :
                   </h5>
                    <TextValidator
                    style={{width:"80%",margin:"20px"}}
                     name="password"
                       type="password"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={this.state.password}
                        validators={['required','vPassword']}
                        errorMessages={['Ce champ est obligatoire','Le mot de passe doit être compris entre 6 et 40 caractères.']}
                        
                        />
                    <h5  className={classes.h5}>Confirmation du mot de passe :</h5>
                     <TextValidator
                     style={{width:"80%",margin:"20px"}}
                      name="passwordConf"
                     type="password"
                       autoComplet="off"
                       onChange={this.handleChange}
                       value={this.state.passwordConf}
                        validators={['isPasswordMatch']}
                        errorMessages={['Le mot de passe ']}
                        
                    />
                  </CardBody>
                  <CardFooter  className={classes.cardFooter}>
                  <Button type="submit" className={classes.button}>S'inscrire</Button>
                 
                  </CardFooter>
                  <h4 style={{color:"red"}}>
                  {this.state.message}</h4>
                </ValidatorForm>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
        </div>
        </div>
<Footer />

      </div>
    
  );
                    }
}
export default withStyles(styles)(RegisterApporteur);