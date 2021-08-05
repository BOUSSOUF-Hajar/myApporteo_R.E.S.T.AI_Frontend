import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import styles from "../../assets/jss/material-kit-react/views/cmbjegagne.js";
const useStyles = makeStyles(styles);



function createData(Prime,Commission) {
  return {Prime, Commission };
}

const rows = [
  createData('500€','Entre 5000€ et 9 999 €'),
  createData('1000€','10 000€ et 19 999€'),
  createData('2000€', '20 000€ et 29 000€'),
];

export default function cmbjegagne() {
  const classes = useStyles();

  return (
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
      <div  className={classes.container}>
          <h1 className={classes.h1}>Combien je gagne ?</h1>
          <h3 className={classes.h2}>La rémuneration</h3>
          <p className={classes.divs}>L'agence immobilière vous versera une prime allant de 500€ à 10 000€ suivant le montant de la commission perçue.<br/>
           Dans les deux semaines suivant la signature définitive bien.</p>
    <TableContainer style={{textAlign:"center"}}>
      <Table className={classes.table}  component={Paper} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Prime apporteur</TableCell>
            <TableCell align="center">Commission perçue par l'agence</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.prime}>
              
              <TableCell align="center">{row.Prime}</TableCell>
              <TableCell align="center">{row.Commission}</TableCell>
               </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3 className={classes.h2}>Comment toucher mes commissions d’apporteur d'affaires immobilier quand je suis un particulier ?</h3>
    <p className={classes.divs}>
      Une fois la vente définitive actée ,vous pourrez générer un “reçu” dans votre espace client, celui-ci sera transmis automatiquement avec votre RIB à l'agence immobilière sélectionnée pour qu'elle puisse procéder au virement.<br/><br/>
      Ce « reçu » est l’équivalent de la facture que le particulier devra remettre à l'entreprise qui a versé la commission. Il faudra en conserver un exemplaire pour le joindre à sa déclaration d’impots.<br/><br/>
      Les impôts autorisent une déclaration de revenus complémentaires sans avoir à créer de société. Cette somme est à déclarer dans la case  « revenus non commerciaux », elle est prise en compte dans le revenu fiscal de l’impôt sur le revenu. Ces revenus doivent être “exceptionnels”.<br/><br/>
      Si ces revenus deviennent réguliers nous vous invitons à vous immatriculer en tant que professionnel de l'immobilier (en demandant une carte T ou sous le statut d'agent commercial),vous restez bien sûr libre de choisir la forme juridique de votre société.<br/>
 </p>

<h3 className={classes.h2}>Comment toucher mes commissions d’apporteur d'affaires immobilier quand je suis un professionnel ?</h3>
<p className={classes.divs}>Si vous êtes immatriculé en tant que professionnel de l'immobilier, il vous suffit de transmettre votre facture à l'agence immobilière sélectionnée.
<br/><br/>
<span className={classes.span}>L’argent vous sera versé par virement.</span></p>
<Link to="/devenirApporteur">
                <Button className={classes.button} size="lg">
                      Démarrer
                    </Button>
                    </Link>
    </div>
    <Footer/>
    </div>
   
  );
}
