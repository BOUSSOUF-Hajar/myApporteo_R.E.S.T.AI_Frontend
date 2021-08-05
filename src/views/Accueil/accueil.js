import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarRateIcon from '@material-ui/icons/StarRate';
import {Done} from "@material-ui/icons";
import Footer from "../../components/Footer/Footer.js";
import image from "../../assets/img/money.jpg";

const useStyles = makeStyles(styles);
export default function Accueil(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
    <div className={classes.full}>
      <Header
        brand="Immo"
        rightLinks={<HeaderLinks />}
        color="Black"
        {...rest}
      />
      <Parallax image={require("../../assets/img/immo.jpg").default}>
    
          <GridContainer className={classes.container} style={{textAlign:"center"}}>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}></h1>
                <h3 className={classes.subtitle}>
                <Done  className={classes.Iconsdone}/>   Vous vendez ou vous connaissez quelqu'un qui <span className={classes.subtitle1}>vend un bien immobilier</span> dans votre entourage ?
                </h3>
                <h3 className={classes.subtitle}>
                <Done  className={classes.Iconsdone} />   Nous sélectionnons  <span className={classes.subtitle1}>la meilleure agence immobilière parmi nos partenaires .</span>
                </h3>
                <h3 className={classes.subtitle}>
                <Done  className={classes.Iconsdone}/>   Une fois le bien vendu,<span className={classes.subtitle1}> recevez votre prime d'apporteur allant de 500€ à 10 000€ !</span>
                </h3>
                <Link to={"/login-page"}>
                <Button className={classes.button} size="lg">
                      Démarrer
                    </Button>
                    </Link>
              </div>
            </GridItem>
          </GridContainer>
         

      </Parallax>
      <div className={classes.section} style={{backgroundColor:"#f8f8f8"}}>
            <h1 className={classes.h1}>Comment ça marche ?</h1>
            <GridContainer className={classes.contents}>
            <GridItem className={classes.grid} xs={12} sm={4} md={3} lg={2}>
              <div>
               <HelpRoundedIcon  className={classes.inputIconsColor}/>
               </div>
               <span className={classes.span}>Vous vendez ou vous connaissez quelqu'un qui vend un bien immobilier ?</span> Dites le nous.
              </GridItem>
              <GridItem className={classes.grid} xs={12} sm={4} md={3} lg={2}>
              <div>
               <CheckCircleIcon className={classes.inputIconsColor}/>
               </div>
               <span className={classes.span}>Nous sélectionnons la meilleure agence immobilière parmi nos. partenaires.</span>
               </GridItem>
              <GridItem className={classes.grid} xs={12} sm={4} md={3} lg={2}>
              <div>
               <AssignmentIcon  className={classes.inputIconsColor}/>
               </div>
               Vous signez votre contrat d'apporteur d'affaires dans votre espace client.
                </GridItem>
              <GridItem className={classes.grid} xs={12} sm={4} md={3} lg={2}>
              <div>
               < MonetizationOnIcon  className={classes.inputIconsColor}/>
               </div>
               Une fois le bien vendu,<span className={classes.span}> recevez votre prime d'apporteur allant de 500€ à 10 000€ !</span></GridItem>
              <GridItem className={classes.grid} xs={12} sm={4} md={3} lg={2}>
              <div>
               <StarRateIcon  className={classes.inputIconsColor}/>
               </div>
               Le vendeur peut noter les prestations de l'agence.
               </GridItem>
               <GridItem><Link to={"/devenirApporteur"}>
                <Button className={classes.button} size="lg">
                      Démarrer
                    </Button>
                    </Link>
                    <div  className={classes.a} >
                    <a  className={classes.a} href="/commentçamarche" color="info">Plus de détails</a>
                    </div>
                </GridItem>
            </GridContainer>
           
                
      </div>
      <div className={classes.section}  >
            <h1 className={classes.h1}>Combien je  gagne ?</h1>
            <GridContainer className={classes.contents} >
            <GridItem  xs={12} sm={6} md={6} lg={6}
           style={{
             backgroundSize:"504px 300px",
            backgroundImage: "url(" + image + ")",
            backgroundRepeat:"no-repeat",
            height:"300px",
            }}> 
            
              </GridItem>
              <GridItem  xs={12} sm={12} md={6} lg={6}
             >
               <div className={classes.grid}>
               La prime va de <span className={classes.span}>500€ à 10 000€ </span> suivant le montant de la commission perçue par l'agence.
               </div>

<div className={classes.grid}> Votre rémunération sera versée par virement dans les 15 jours suivants la vente définitive du bien.
              </div>
              
                </GridItem>
                <GridItem>
                <Link to={"/devenirApporteur"}>
                <Button className={classes.button} size="lg">
                      Démarrer
                    </Button>
              </Link>
              <div  className={classes.a} >
                    <a className={classes.a} href="/combienjegagne" color="info">Plus de détails</a>
            </div>
            </GridItem>
              </GridContainer>
              
              
              </div>
               <Footer />
      </div>
      
    );
}