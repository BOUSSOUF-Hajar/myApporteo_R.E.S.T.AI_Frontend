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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";
import { TextField } from '@material-ui/core';
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { isEmail } from "validator";
import userService from "../../services/userService";
import AuthService from "../../services/authService";

import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import { Component } from "react";

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

export default class RegisterPartenaire extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
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
      role:["partenaire"],
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
    ValidatorForm.addValidationRule('vUsername',vusername);
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
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.password) {
          return false;
      }
      return true;
  });
}
  handleRegister=e=> {
    e.preventDefault();

   console.log("ffff")

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
          window.location.href = "/partenaire/connexion";
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    
  }

  render(){
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
        <div>
      <div  style={styles.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card >
              
            <ValidatorForm
                style={styles.form}   onSubmit={this.handleRegister}
            >
                  <CardHeader  style={styles.cardHeader}>
                    <h3   style={styles.h3}>Inscription</h3>
                    
            
                  </CardHeader>
                 
                  <CardBody>
                  <h5  style={styles.h5}> Nom de l'agence: </h5>
                    <TextValidator
                   
                      name="nomAgence"
                      style={{width:"80%",margin:"20px"}}

                        type="text"
                        onChange= {this.handleChange}
                        value={this.state.nomAgence}
                        validators={['require']}
                        errorMessages={['Ce champ est obligatoire']}
                    />
                    <h5  style={styles.h5}> Nom de l'utilisateur : </h5>
                    <TextValidator
                     style={{width:"80%",margin:"20px"}}
                      name="username"
                      validators={['required','vUsername','usernameExist']}
                      errorMessages={['Ce champ est obligatoire',"Le nom d’utilisateur doit être suppérieur à 3 caractères. ","Ce nom d'utilisateur est déja exist"]}
                     type="text"
                        onChange= {this.handleChange}
                        value={this.state.username}
                    />
                   
                    <h5  style={styles.h5}> Nom de la société : </h5>
                    <TextValidator
                     style={{width:"80%",margin:"20px"}}
                      name="nomSociete"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.nomSociete}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                    />
                    <h5  style={styles.h5}> Siret : </h5>
                    <TextValidator
                     style={{width:"80%",margin:"20px"}}
                      name="Siret"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.Siret}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                    />
                    <h5  style={styles.h5}> Numéro de carte T : </h5>
                    <TextValidator
                     style={{width:"80%",margin:"20px"}}
                      name="numCarteT"
                      validators={['required']}
                      errorMessages={[ 'Ce champ est obligatoire']}
                      
                         type="text"
                        onChange={this.handleChange}
                        value={this.state.numCarteT}
                    />
                    <h5  style={styles.h5}> Carte T délivrée par le CCI de : </h5>
                    <TextValidator
                     style={{width:"80%",margin:"20px"}}
                      name="CCI"
                     type= "text"
                        onChange={this.handleChange}
                        value={this.state.CCI}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                      
                    />
                    <h5  style={styles.h5}> Adresse de l'agence : </h5>
                    <TextValidator
                      name="adresse"
                      style={{width:"80%",margin:"20px"}}
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.adresse}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                     
                    />
                    <h5  style={styles.h5}> Ville : </h5>
                    <TextValidator
                      name="ville"
                      style={{width:"80%",margin:"20px"}}
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.ville}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                        
                  
                    />
                    <h5  style={styles.h5}> Code postal : </h5>
                    <TextValidator
                      name="codePostal"
                      style={{width:"80%",margin:"20px"}}
                      type="text"
                        onChange={this.handleChange}
                        value={this.state.codePostal}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                      
                    />
                     <h5  style={styles.h5}> Email :</h5>
                    <TextValidator
                      name="email"
                      style={{width:"80%",margin:"20px"}}
                     
                        type= "email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        validators={['require','vEmail','emailExist']}
                        errorMessages={[ 'Ce champ est obligatoire',"Ce mail n'est valide","Ce email est déja utilisé pour un autre compte ."]}
                        
                       
                    />
                     <h5  style={styles.h5}> Téléphone :</h5>
                    <TextValidator
                      name="telephone"
                      style={{width:"80%",margin:"20px"}}
                        type="phone"
                        onChange={this.handleChange}
                        value={this.state.telephone}
                        validators={['required']}
                        errorMessages={['Ce champ est obligatoire']}
                        
                    />
                   <h5  style={styles.h5}> Mot de passe :
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
                    <h5  style={styles.h5}>Confirmation du mot de passe :</h5>
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
                  <CardFooter  style={styles.cardFooter}>
                  <Button type="submit">S'inscrire</Button>
                   
                  </CardFooter>
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
