import React, {useContext, useEffect, useState} from 'react'
import AuthService from "../../services/authService";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Footer from "../../components/Footer/Footer.js";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Paper from '@material-ui/core/Paper';

import AffaireService from "../../services/affaireSevice";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from "../../components/CustomButtons/Button.js";
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    container:{
        margin:25,
    },
    table: {
    
      minWidth: 700,
    },
  });

function OrderHistory() {
    const classes = useStyles();
    const [affaires,setAffaires] = useState([])
    const [file,setFile] = useState(null)
    const isAdmin = AuthService.isAdmin()
    const isApporteur = AuthService.isApporteur()
    const isPartenaire = AuthService.isPartenaire()
    const user = localStorage.getItem('user')
    const ajouterContrat=async (id,file)=>{
      if(file==null){

      }
      else{
      let formData = new FormData();
    formData.append("file", file)
    
      AffaireService.ajouterContrat(id,formData).then(()=>{
        
       }
     );
      }
    }

     

    useEffect(() => {
        if(user){
            const getHistory = () =>{
                if(isApporteur){
                   AffaireService.mesAffaireAppo().then(
                    response => {
                     
                        setAffaires(response.data)
                       })
                   
                }
                else if(isPartenaire){
                    AffaireService.mesAffairePart().then(
                        response => {
                         
                            setAffaires(response.data)
                           })
                }
                else if(isAdmin){
                    AffaireService.allAffaires().then(
                        response => {
                         
                            setAffaires(response.data)
                           })
                }
            }
            getHistory()
        }
    },[user,affaires,setAffaires])
    
    
    const uploadJSONFiles=  e =>{
      e.preventDefault()
      const file=e.target.files[0]
      if(!file) return confirmAlert({
        title: "Le fichier n'existe pas.",
        message: '',
        buttons: [
          {
            label: 'OK',
            onClick: () => {}
          }
        ]
      });

    if(file.size > 1024 * 1024) // 1mb
        return confirmAlert({
            title: "Le fichier est trop volumineux !",
            message: '',
            buttons: [
              {
                label: 'Ok',
                onClick: () =>null
              }
            ]
          });

    if(file.type !== 'application/pdf') // 1mb
        return confirmAlert({
            title: "Le format du fichier est incorrect.",
            message: '',
            buttons: [
              {
                label: 'OK',
                onClick: () =>null
              }
            ]
          });
      setFile(file)
    }
    return (
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
      
        <div className={classes.container}>
        <TableContainer component={Paper} >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>DATE</TableCell>
                <TableCell align="right">TYPE DU BIEN</TableCell>
                <TableCell align="right">PROPRIETAIRE</TableCell>
                <TableCell align="right">AGENCE</TableCell>
                <TableCell align="right">STATUT</TableCell>
                <TableCell align="right">CONTRAT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {affaires.map((row) => (
            <TableRow key={row.NomPrenom}>
              <TableCell component="th" scope="row">
                {row.createdAt}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.nomPrenom}</TableCell>
              <TableCell align="right">{row.apporteur.username}</TableCell>
              <TableCell align="right">{row.statut}</TableCell>
              <TableCell align="right">{row.contrat}</TableCell>
              {isAdmin ? <TableCell align="right">
                 
                        <input
                        name="contrat"
                        onChange={ uploadJSONFiles}
                            type="file"
                            accept="application/pdf"
                           />  <button Onclick={ajouterContrat(row.id,file)}>Ajouter contrat</button> </TableCell>:
                            null}
                 
            
             
              </TableRow>
          ))}
            </TableBody>
            
          </Table>
        </TableContainer>
        
        </div>
        <Footer />
        </div>
      );
    
}

export default OrderHistory;
