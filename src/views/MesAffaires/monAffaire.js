import React from "react";
import {useContext, useEffect, useState} from 'react'
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import AffaireService from "../../services/affaireSevice";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import AuthService from "../../services/authService";
import { Table, TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";
const initialState = {
  id:0
}
const useStyles = makeStyles(styles);
function Popup(props) {
  const classes = useStyles();
  const [errorFile,setErrorFile]=useState("");
  const [functionError,setFunctionError]=useState("");
  const [affaire, setAffaire] = useState(props.affaire);
  const [fileInfo,setFileInfo] = useState([])
  const [fileInfo1,setFileInfo1] = useState([])
  const [file,setFile] = useState(null)
  const isAdmin = AuthService.isAdmin()
  
  const isApporteur = AuthService.isApporteur()
  const isPartenaire = AuthService.isPartenaire()
  const user = localStorage.getItem('user')
  useEffect(() => {
    if(!isPartenaire){
  AffaireService.getAdminContratId(affaire.id).then((response) => {
        
          AffaireService.getContrat(response.data).then(
            ((resp)=>{
              setFileInfo(resp.data)
            })
          )
           
        
        });
        AffaireService.getAppContratId(affaire.id).then((response) => {
        
          AffaireService.getContrat(response.data).then(
            ((resp)=>{
              setFileInfo1(resp.data)
            })
          )
           
        
        });
      }
       
      },[fileInfo,setFileInfo,setFile])
      function annulerAjoutApp(){
        confirmAlert({
         
        message: 'Voulez-vous supprimer le contrat ?',
        buttons: [
          {
            label: 'Oui',
            onClick:() => { 
                 
              AffaireService.annulerAjoutApp(affaire.id).then(()=>{
                AffaireService.getAffaire(affaire.id).then((response)=>
                setAffaire(response.data));
                confirmAlert({
                  message: "Le contrat a été supprimé .",
                 
                  buttons: [
                    {
                      label: 'Ok',
                      onClick: () =>null
                    }
                  ]
                });
  
               
              },error=>{
                setFunctionError("Une erreur s'est produite, Veuillez réessayer .")
              }
              )
            }},
            {
              label:'Non',
              onClick:null,
            }]
            });}
            function annulerAjoutAdmin(){
              confirmAlert({
               
              message: 'Voulez-vous supprimer le contrat ?',
              buttons: [
                {
                  label: 'Oui',
                  onClick:() => { 
                       
                    AffaireService.annulerAjoutAdmin(affaire.id).then(()=>{
                      AffaireService.getAffaire(affaire.id).then((response)=>
                      setAffaire(response.data));
                      confirmAlert({
                        message: "Le contrat a été supprimé .",
                       
                        buttons: [
                          {
                            label: 'Ok',
                            onClick: () =>null
                          }
                        ]
                      });
        
                     
                    },error=>{
                      setFunctionError("Une erreur s'est produite, Veuillez réessayer .")
                    }
                    )
                  }},
                  {
                    label:'Non',
                    onClick:null,
                  }]
                  });}
    function annulerVente(){
      confirmAlert({
       
      message: 'Voulez-vous annuler cette vente ?',
      buttons: [
        {
          label: 'Oui',
          onClick:() => { 
               
            AffaireService.annulerVente(affaire.id).then(()=>{
              AffaireService.getAffaire(affaire.id).then((response)=>
              setAffaire(response.data));
              confirmAlert({
                message: "L'annulation a été bien éfféctuer .",
               
                buttons: [
                  {
                    label: 'Ok',
                    onClick: () =>null
                  }
                ]
              });

             
            },error=>{
              setFunctionError("Une erreur s'est produite, Veuillez réessayer .")
            }
            )
          }},
          {
            label:'Non',
            onClick:null,
          }]
          });}
  function ajouterContrat(){
    confirmAlert({
       
      title:"Confirmation",
      buttons: [
        {
          label: 'Oui',
          onClick:() => { 
            const id=affaire.id
    
            if(file==null){
             
            }
            else{
            let formData = new FormData();
          formData.append("file", file)
          console.log(formData)
          if(isAdmin){
             AffaireService.adminAjouterContrat(id,formData).then(()=>{
              AffaireService.getAdminContratId(affaire.id).then((response) => {
        
                AffaireService.getContrat(response.data).then(
                  ((resp)=>{
                    setFileInfo(resp.data)
                  })
                )
                 
              
              });
              confirmAlert({
                message: "Le contrat a été bien ajouté .",
               
                buttons: [
                  {
                    label: 'Ok',
                    onClick: () =>null
                  }
                ]
              });
             },error=>{

              setErrorFile("Une erreur s'est produite, Veuillez réessayer .");
             }
           );
           
            }
            if(isApporteur){
              
              AffaireService.appAjouterContrat(id,formData).then(()=>{
                AffaireService.getAdminContratId(affaire.id).then((response) => {
        
                  AffaireService.getContrat(response.data).then(
                    ((resp)=>{
                      setFileInfo1(resp.data)
                    })
                  )
                   
                
                });
                confirmAlert({
                  message: "Le contrat a été bien ajouté .",
                 
                  buttons: [
                    {
                      label: 'Ok',
                      onClick: () =>null
                    }
                  ]
                });
              },error=>{

                setErrorFile("Une erreur s'est produite, Veuillez réessayer .");
               }
            );
           
             }
          }
        }
        }]
      })
    
    
}

    function vender(){
      confirmAlert({
       
        message: 'Voulez-vous confirmer cette vente ?',
        buttons: [
          {
            label: 'Oui',
            onClick:() => { 
                 
              AffaireService.affaireVendu(affaire.id).then(()=>{
                AffaireService.getAffaire(affaire.id).then((response)=>
                setAffaire(response.data));
                confirmAlert({
                  message: "L'affaire a été vendu .",
                 
                  buttons: [
                    {
                      label: 'Ok',
                      onClick: () =>null
                    }
                  ]
                });

               
              },error=>{
                setFunctionError("Une erreur s'est produite, Veuillez réessayer .")
              }
              )
            }
              
               
              
               
            
              
              },
            {
              label:'Non',
              onClick:null,
            }]
            });
      
    }
    function affecter(){
      confirmAlert({
        
        message: 'Voulez-vous affécter cet affaire à un partenaire ?',
        buttons: [
          {
            label: 'Oui',
            onClick:() => { 
              AffaireService.affecterPartenaire(affaire).then(()=>{
                confirmAlert({
                  message: "L'affaire a été bien affécté .",
                 
                  buttons: [
                    {
                      label: 'Ok',
                      onClick: () =>null
                    }
                  ]
                });
                AffaireService.getAffaire(affaire.id).then((response)=>
                {
                setAffaire(response.data)
                })
              },error=>{
                setFunctionError("Une erreur s'est produite, Veuillez réessayer .")
              })
            }
              
               
              
               
            
              
              },
            {
              label:'Non',
              onClick:null,
            }]
            });
      
        
    }
    
  
  const uploadJSONFiles=  e =>{
    e.preventDefault()
    const filey=e.target.files[0]
    setFile(filey)
    if(!filey) return confirmAlert({
      title: "Le fichier n'existe pas.",
      message: '',
      buttons: [
        {
          label: 'OK',
          onClick: () => {}
        }
      ]
    });

  if(filey.size > 1024 * 1024) // 1mb
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

  if(filey.type !== 'application/pdf') // 1mb
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
    
  }
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.popup}>x</span>
        <h2>Les information de l'affaire :</h2>
        <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell><span className="field">Type du bien immobilier </span></TableCell>
                  <TableCell><span className="info">{affaire.type}</span></TableCell>
                </TableRow>
                    <TableRow>
                    <TableCell><span className="field">Adresse</span></TableCell>
                    <TableCell><span className="info">{affaire.adresse}</span></TableCell>
                </TableRow>
                    <TableRow><TableCell> <span className="field"> Ville</span></TableCell> 
                    <TableCell><span className="info">{affaire.ville}</span></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><span className="field">Statut </span> </TableCell>
                    <TableCell><span className="info">{affaire.statut}</span></TableCell>
                    
                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        <h2>Les informations du propriétaire :</h2>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
        <TableCell><span className="field">Nom</span> </TableCell>
        <TableCell><span className="info">{affaire.nomPrenom}</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell> <span className="field">Telephone </span> </TableCell>
        <TableCell><span className="info">{affaire.telephoneProp} </span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell><span className="field">Email</span> </TableCell>
        <TableCell><span className="info">{affaire.telephoneProp}</span></TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        <h2>Les informations de l'apporteur :</h2>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
              <TableCell><span className="field">Nom  </span></TableCell>
              <TableCell><span className="info">{affaire.apporteur.username}</span></TableCell>
              </TableRow>
        
          <TableRow>
        <TableCell>
          <span className="field">Telephonne :</span></TableCell>
          <TableCell><span className="info">{affaire.apporteur.telephone}</span></TableCell>
          </TableRow>
          <TableRow>
          <TableCell><span className="field">Email </span></TableCell>
          <TableCell><span className="info">{affaire.apporteur.email}</span></TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        <h2>Les informations du partenaire :</h2>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
              <TableCell><span className="field">Nom </span></TableCell>
              
               <TableCell><span className="info">{affaire.partenaire ?  affaire.partenaire.username: "Pas encore affécté"}</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell><span className="field">Telephonne</span></TableCell>
        <TableCell><span className="info">{affaire.partenaire ?  affaire.partenaire.telephone: ""}</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell><span className="field">Email</span></TableCell>
        <TableCell><span className="info">{affaire.partenaire ?  affaire.partenaire.email: ""}</span></TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
       {!isPartenaire&& <div>
         <h2>Contrats :</h2>
         <TableContainer style={{marginBottom:"40px"}}>
           <Table>
             <TableBody>
               <TableRow>
             <TableCell><span className="field">Contrat non signé </span> </TableCell>
             <TableCell><a className="info" href={fileInfo.url}>{fileInfo.name}</a></TableCell>
             </TableRow>
             <TableRow>
             <TableCell><span className="field">Contrat signé</span> </TableCell>
             <TableCell><a className="info" href={fileInfo1.url}>{fileInfo1.name}</a></TableCell>
             </TableRow>
         </TableBody>
         </Table>
         </TableContainer>
         </div>}
          {(!isPartenaire)&affaire.statut=="En attente de traitement"?<div>
         
            <input
      name="contrat"
      onChange={ uploadJSONFiles}
          type="file"
          accept="application/pdf"
         /> 
        
      
          <IconButton
           style={{color:"#ff2a02"}} 
          onClick={ajouterContrat}
          component="span"
              
            >
              
              <CloudUploadIcon />
        </IconButton>
        <h4 style={{color:"red"}}>{errorFile}</h4></div>:null}
                
        {isApporteur&affaire.statut=="Contrat signé"? <Button onClick={annulerAjoutApp} className={classes.button}>Supprimer contrat</Button>: null}
        {isAdmin&affaire.statut=="Contrat signé"? <Button onClick={affecter} className={classes.button}>Affacter</Button>: null}
        {isPartenaire&affaire.statut=="En vente" ?<Button onClick={vender}  className={classes.button}>Confirmer la vente</Button>:null}
        {isPartenaire&affaire.statut=="Vendu"?<Button onClick={annulerVente}  className={classes.button}>Annuler vente</Button>:null}
        <h4 style={{color:"red"}}>{functionError}</h4>
      </div>

    </div>
  );
};
 
export default Popup;