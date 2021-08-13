import React from "react";
import {useState, useContext, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import {Email,Phone} from "@material-ui/icons";
import People from "@material-ui/icons/People";
// core components
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
import AffaireService from "../../services/affaireSevice";
import CardFooter from "../../components/Card/CardFooter.js";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CustomInput from "../../components/CustomInput/CustomInput.js";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import userService from "../../services/userService.js";
import { confirmAlert } from 'react-confirm-alert'; 
import authService from "../../services/authService.js"
import 'react-confirm-alert/src/react-confirm-alert.css';
const useStyles = makeStyles(styles);
const initialState = {
  type: '',
  nomPrenom: '',
  adresse: '',
  ville: '',
  codePostal:'',
  emailProp:'',
  telephoneProp:'',
  statut:'En attente de traitement',
  
  
  
}
function DevenirApp() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [affaire, setAffaire] = useState(initialState);
  const [message, setMessage] = useState("");
  
  const param = useParams();
  const handleChangeInput = e =>{
    const {name, value} = e.currentTarget
  
    setAffaire({...affaire, [name]:value})
}
const handleSubmit = async e =>{
  e.preventDefault()
  confirmAlert({
      title: 'Confirmation ',
      message: '',
      buttons: [
        {
          label: 'Oui',
          onClick:async () => { 
               
            AffaireService.ajouterAffaire(affaire).then(()=>{
              window.location.href = "/affaires";
             },
             error => 
               setMessage("Une erreur a été produite"),
               
             
           );
             
              }
            },
          {
            label:'Non',
            onClick:null,
          }]
          });
        }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  
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
      <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CardHeader className={classes.cardHeader}>
                    <h3  className={classes.h3}>Devenir un apporteur</h3>
                    
            
                  </CardHeader>
                 
                  <CardBody>
                   
                    <FormLabel className={classes.h5} component="legend">Quel est le type du bien ?</FormLabel>
                    <RadioGroup aria-label="typeBien" name="type"  value={affaire.type} onChange={handleChangeInput}>
                    <FormControlLabel style={{color:"#222"}} value="Maison" control={<Radio style={{color:"black"}}/>} label="Maison" />
                    <FormControlLabel style={{color:"#222"}} value="immeuble" control={<Radio  style={{color:"black"}}/>} label="Immeuble" />
                    <FormControlLabel style={{color:"#222"}} value="appartement" control={<Radio  style={{color:"black"}}/>} label="Appartement" />
                    <FormControlLabel style={{color:"#222"}} value="terrain" control={<Radio  style={{color:"black"}}/>} label="Terrain" />
                    <FormControlLabel style={{color:"#222"}} value="local" control={<Radio  style={{color:"black"}}/>} label="Local commercial" />
                    </RadioGroup>
                    <h5 className={classes.h5}> Nom et prénom du propriétaire : </h5>
                   
                   
                   
                   <input name="nomPrenom"  onChange={handleChangeInput}  
                        value={affaire.nomPrenom} type="text"/>
                    
                     <h5 className={classes.h5}> Adresse du bien : </h5>
                    <input 
                        name="adresse"
                        onChange={handleChangeInput}
                        value={affaire.adresse}
                        type="text" />

                     <h5 className={classes.h5}> Ville : </h5>
                    <input
              
                      id="Ville"
                        name="ville"
                        onChange={handleChangeInput}
                        value={affaire.ville}
                        type="text"
                        />
                     <h5 className={classes.h5}> Code postal : </h5>
                    <input
              
                      id="codePostal"
                     
                        name="codePostal"
                        onChange={handleChangeInput}
                        value={affaire.codePostal}
                        type="text"
                    />
                     <h5 className={classes.h5}> Email du propiétaire : </h5>
                    <input
              
                      id="emailProp"
                       name="emailProp"
                        onChange={handleChangeInput}
                        value={affaire.emailProp}
                        type="text"
                       
                        
                    />
                     <h5 className={classes.h5}> Téléphone du propriétaire :</h5>
                    <input
                      
                      id="phone"
                      
                        type="phone"
                        name="telephoneProp"
                        onChange={handleChangeInput}
                        value={affaire.telephoneProp}
                        
                    />
                   
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button className={classes.button} type="submit" size="lg">
                      Envoyer
                    </Button>
                    {message}
                  </CardFooter>
                </form>
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
export default  DevenirApp;
