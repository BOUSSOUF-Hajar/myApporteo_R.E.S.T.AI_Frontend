import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import {Email,Phone} from "@material-ui/icons";
import { Link } from "react-router-dom";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";
import classNames from "classnames";
import styles from "../../assets/jss/material-kit-react/views/commentçaMarcheStyle.js";
const useStyles = makeStyles(styles);

export default function Comment(props) {
  const classes = useStyles();

    return(
        <div><Header
        brand="Immo"
        rightLinks={<HeaderLinks />}
        fixed
        color="Black"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        
      />
            <div className={classes.container}>
                <h1 className={classes.h1}>Comment ça marche ?</h1>
            <GridContainer >
            <GridItem  className={classes.gridTitle} xs={12} sm={6} md={6} lg={6}>
            <h2 className={classes.h2}>Vous connaissez quelqu'un qui souhaite vendre son bien immobilier.</h2>
                </GridItem>
                <GridItem className={classes.grid} xs={12} sm={6} md={6} lg={6}>
                    
                   <div className={classes.divs}> Ca peut même être vous !
                    Vous pouvez être un particulier, un professionnel ou un commerçant etc...</div>
                </GridItem>
                <GridItem className={classes.grid} xs={12} sm={6} md={6} lg={6}>
                <div className={classes.divs}>-Nom,<br/>-Prénom <br/>
                -Adresse du bien à vendre (ville ou adresse exacte)<br/>
                -Type de bien<br/>
                -Numéro de téléphone du vendeur<br/>
                -Adresse mail du vendeu</div>
                </GridItem>
                <GridItem className={classes.gridTitle} style={{background:"#009fff"}} xs={12} sm={6} md={6} lg={6}>
                <h2 className={classes.h2}>Vous nous communiquez
                les coordonnées du vendeur.</h2>
                </GridItem>
                <GridItem className={classes.gridTitle} xs={12} sm={6} md={6} lg={6}>
                <h2 className={classes.h2}>Nous sélectionnons la meilleure agence parmi nos partenaires en tenant compte des caractéristiques du bien pour augmenter les chances de vendre au meilleur prix.
                </h2>
                </GridItem>
                <GridItem className={classes.grid} xs={12} sm={6} md={6} lg={6}>
                <div className={classes.divs}>Nous comparons les agences des grands groupes ainsi que les indépendants. Voir notre methode de selection. Vous signez un contrat d'apporteur d'affaires avec l'agence via votre compte client.
Vous pourrez suivre toutes les étapes de la commercialisation via votre espace client.
(signature du mandat, signature promesse de vente, signature vente définitive</div>
                </GridItem>
                <GridItem className={classes.grid} xs={12} sm={6} md={6} lg={6}>
                <div className={classes.divs}>L’argent est versé sur le compte de l'apporteur dans les 15 jours suivant la vente définitive.
Dans le respect de la réglementation fiscale.</div>
                </GridItem>
                <GridItem className={classes.gridTitle} style={{background:"#009fff"}} xs={12} sm={6} md={6} lg={6}>
                    <h2 className={classes.h2}>Le bien est vendu !
L'agence sélectionnée vous verse une prime allant de 500€ à 10 000€.</h2>
                </GridItem>
                <GridItem className={classes.gridTitle} xs={12} sm={6} md={6} lg={6}>
                 <h2 className={classes.h2}> Le vendeur peut noter la prestation de l'agence sélectionnée.</h2>
                </GridItem>
                <GridItem className={classes.grid} xs={12} sm={6} md={6} lg={6}>
                    <div className={classes.divs}>Grâce à notre formulaire de satisfaction, le vendeur pourra noter la prestation de l'agence.
                        </div>
                        </GridItem>
                
                </GridContainer>
                <Link to="/devenirApporteur">
                <Button className={classes.button} size="lg">
                      Démarrer
                    </Button>
                    </Link>
                </div>
                 <Footer />
                </div>
                
);
    }