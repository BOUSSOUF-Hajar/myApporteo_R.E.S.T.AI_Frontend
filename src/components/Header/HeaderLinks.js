/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import AuthService from "../../services/authService";
// @material-ui/core component
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import MesInfromations from "../../views/MesInformation/mesInformation.js"
// @material-ui/icons
import { Help, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";

import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js"
import  {useContext, useState} from 'react'

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const isApporteur =AuthService.isApporteur();
  const isPartenaire =AuthService.isPartenaire();
  const isAdmin=AuthService.isAdmin();
  const isLogged=AuthService.isLogged();
  const [isOpen,setIsOpen]=useState(false)
  const close=()=>setIsOpen(false)
  const logoutUser = async () =>{
    confirmAlert({
        title: 'Confirmation ',
        message: 'Voulez-vous vraiment vous déconnecter ?',
        buttons: [
          {
            label: 'Oui',
            onClick:() =>  { AuthService.logout()
              window.location.href = "/"}
          },
          {
            label: 'Non',
            onClick: () => null
          }
        ]
      });
    }
    const partenaireHeader=()=>{
      return(<>
         
      <List className={classes.list}>
   
  <ListItem className={classes.listItem}>
      <Link to={"/affaires"}>
      <Button
        target="_blank"
        className={classes.headerButton}
      >
        Mes affaires
      </Button>
      </Link>
      </ListItem>
      
    
      <ListItem className={classes.listItem}>
      
      <Button onClick={()=>setIsOpen(true)}
        target="_blank"
        className={classes.headerButton}
      >
        Mon profil
      </Button>
      
    </ListItem>
    
    <ListItem className={classes.listItem}>
    
          <Button 
          onClick={logoutUser}
        target="_blank"
        className={classes.headerButtonLogout}>
            Log out
          </Button>
         
    </ListItem>
    </List>
   
  </>)
    }
    const userHeader = () =>{
      return(<> 
        <List className={classes.list}>
            
            <ListItem className={classes.listItem}>
            <Link to={"/apporteur/connexion"}>
            <Button 
            
              target="_blank"
              className={classes.espaceA}
            >
              Espace apporteur
            </Button>
            </Link>
          </ListItem>
          
          <ListItem className={classes.listItem}>
          <Link to={"/partenaire/connexion"}>
                <Button 
              target="_blank"
              className={classes.espaceP}>
                  Espace partenaire
                </Button>
              </Link>
               
          </ListItem>
          
          
          </List>
          
         
            </>);
    }
    const adminHeader=() =>{
      return(
        <>
         
        <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Link to={"/affaires"}>
        <Button
          target="_blank"
          className={classes.headerButton}
        >
          Affaires afféctés
        </Button>
        </Link>
      </ListItem>
    <ListItem className={classes.listItem}  >
        <Link to={"/affaires"}>
        <Button
        hidden
          target="_blank"
          className={classes.headerButton}
        >
          Affaire non afféctés
        </Button>
        </Link>
        </ListItem>
        
      
        
      
      <ListItem className={classes.listItem}>
      
            <Button 
            onClick={logoutUser}
          target="_blank"
          className={classes.headerButtonLogout}>
              Log out
            </Button>
           
      </ListItem>
      </List>
     
    </>
    )
    }
  const apporteurHeader = () =>{
    return(
        <>
         
        <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Link to={"/apporteur/devenirApporteur"}>
        <Button
          target="_blank"
          className={classes.headerButton}
        >
          Devenir apporteur
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={"/affaires"}>
      <Button
        target="_blank"
        className={classes.headerButton}
      >
        Mes affaires
      </Button>
      </Link>
      </ListItem>
        
      
        <ListItem className={classes.listItem}>
        
        <Button
        onClick={()=>setIsOpen(true)}
          target="_blank"
          className={classes.headerButton}
        >
          Mon profil
        </Button>
        
      </ListItem>
      
      <ListItem className={classes.listItem}>
      
            <Button 
            onClick={logoutUser}
          target="_blank"
          className={classes.headerButtonLogout}>
              Log out
            </Button>
           
      </ListItem>
      </List>
     
    </>
    )
}
  return (
    <div>
    
    <List className={classes.list1}>
    {isApporteur && apporteurHeader()}
    {isPartenaire && partenaireHeader()}
        {!isLogged &&userHeader() }
        {isAdmin&&adminHeader()}
     <List className={classes.list1}>
            
           
            <ListItem className={classes.listItem}>
              <a className={classes.a} href="/commentçamarche">Comment ça marche ?</a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a className={classes.a} href="/combienjegagne">Combien je gagne ?</a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a className={classes.a} href="/devenirApporteur">Devenir apporteur</a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a className={classes.a} href="/contact">Contact</a>
            </ListItem>
          </List> 
          {isOpen&& <MesInfromations popup={close}/>}
          </List>
     </div>
  );
}
