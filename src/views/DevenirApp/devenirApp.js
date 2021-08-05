import React from "react";
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
import CardFooter from "../../components/Card/CardFooter.js";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";


const useStyles = makeStyles(styles);

export default function DevenirApp(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
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
        {...rest}
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
                <form className={classes.form} onSubmit={devenirApp}>
                  <CardHeader className={classes.cardHeader}>
                    <h3  className={classes.h3}>Devenir un apporteur</h3>
                    
            
                  </CardHeader>
                 
                  <CardBody>
        
                    <FormLabel className={classes.h5} component="legend">Quel est le type du bien ?</FormLabel>
                    <RadioGroup aria-label="typeBien" name="typeBien">
                    <FormControlLabel style={{color:"#222"}} value="Maison" control={<Radio style={{color:"black"}}/>} label="Maison" />
                    <FormControlLabel style={{color:"#222"}} value="immeuble" control={<Radio  style={{color:"black"}}/>} label="Immeuble" />
                    <FormControlLabel style={{color:"#222"}} value="appartement" control={<Radio  style={{color:"black"}}/>} label="Appartement" />
                    <FormControlLabel style={{color:"#222"}} value="terrain" control={<Radio  style={{color:"black"}}/>} label="Terrain" />
                    <FormControlLabel style={{color:"#222"}} value="local" control={<Radio  style={{color:"black"}}/>} label="Local commercial" />
                    </RadioGroup>
                    <h5 className={classes.h5}> Nom et prénom du propriétaire : </h5>
                    <CustomInput
              
                      id="propNom"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                     <h5 className={classes.h5}> Adresse du bien : </h5>
                    <CustomInput
              
                      id="adresseBien"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                     <h5 className={classes.h5}> Ville : </h5>
                    <CustomInput
              
                      id="Ville"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}

                    />
                     <h5 className={classes.h5}> Code postal : </h5>
                    <CustomInput
              
                      id="codePostal"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                     <h5 className={classes.h5}> Email du propiétaire : </h5>
                    <CustomInput
              
                      id="emailProp"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                     <h5 className={classes.h5}> Téléphone du propriétaire :</h5>
                    <CustomInput
                      
                      id="phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "phone",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                   
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button className={classes.button} type="submit" size="lg">
                      Envoyer
                    </Button>
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
