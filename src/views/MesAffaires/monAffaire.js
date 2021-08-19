import React from "react";
import {useContext, useEffect, useState} from 'react'
import "./style.css";
import AffaireService from "../../services/affaireSevice";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import AuthService from "../../services/authService";
const initialState = {
  id:0
}
function Popup(props) {
  const [affaire, setAffaire] = useState(initialState);
  const [fileInfo,setFileInfo] = useState([])
  const [fileInfo1,setFileInfo1] = useState([])
  const [file,setFile] = useState(null)
  const isAdmin = AuthService.isAdmin()
  
  const isApporteur = AuthService.isApporteur()
  const isPartenaire = AuthService.isPartenaire()
  const user = localStorage.getItem('user')
  useEffect(() => {
    if(!isPartenaire){
  AffaireService.getAdminContratId(props.affaire.id).then((response) => {
        
          AffaireService.getContrat(response.data).then(
            ((resp)=>{
              setFileInfo(resp.data)
            })
          )
           
        
        });
        AffaireService.getAppContratId(props.affaire.id).then((response) => {
        
          AffaireService.getContrat(response.data).then(
            ((resp)=>{
              setFileInfo1(resp.data)
            })
          )
           
        
        });
      }
       
      },[fileInfo,setFileInfo,setFile])
     
  function ajouterContrat(){
    const id=props.affaire.id
    
    if(file==null){
     
    }
    else{
    let formData = new FormData();
  formData.append("file", file)
  if(isAdmin){
     AffaireService.adminAjouterContrat(id,formData).then(()=>{
     
     }
   );
   AffaireService.getAdminContratId(props.affaire.id).then((response) => {
        
    AffaireService.getContrat(response.data).then(
      ((resp)=>{
        setFileInfo(resp.data)
      })
    )
     
  
  });
    }
    if(isApporteur){
      
      AffaireService.appAjouterContrat(id,formData).then(()=>{
      
      }
    );
    AffaireService.getAppContratId(props.affaire.id).then((response) => {
        
      AffaireService.getContrat(response.data).then(
        ((resp)=>{
          setFileInfo1(resp.data)
        })
      )
       
    
    });
     }

  
  setFile("")
}
    }
    function vender(){
      confirmAlert({
        title: 'Confirmation ',
        message: 'Voulez-vous confirmer cette vente ?',
        buttons: [
          {
            label: 'Oui',
            onClick:() => { 
                 
              AffaireService.affaireVendu(props.affaire.id).then(()=>{

                window.location.href = "/affaires";
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
      
      setAffaire({id:props.affaire.id})
      affaire.id=props.affaire.id
      console.log(affaire)
        AffaireService.affecterPartenaire(affaire).then(()=>{

        })
    }
    
  
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
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.popup}>x</span>
        
        Type du bien immobilier : {props.affaire.type} <br/>
        Propriétaire :  {props.affaire.nomPrenom}<br/>
        Telephone :  {props.affaire.telephoneProp}<br/>
        Email : {props.affaire.telephoneProp}<br/>
        Adresse : {props.affaire.adresse}<br/>
        Ville : {props.affaire.ville}<br/>
        Apporteur : {props.affaire.apporteur.username}<br/>
        Agence : {props.affaire.partenaire ? props.affaire.partenaire.username: "Pas encore affécté"} <br/>
        Statut :{props.affaire.statut}<br/>
       {!isPartenaire&& <div>
        Contrat non signé: <a href={fileInfo.url}>{fileInfo.name}</a>
        Contrat signé: <a href={fileInfo1.url}>{fileInfo1.name}</a>
         <input
                        name="contrat"
                        onChange={ uploadJSONFiles}
                            type="file"
                            accept="application/pdf"
                           /> <br/>
                            <button onClick={ajouterContrat}>Ajouter contrat</button>
        
                           
                            </div>}
        {isAdmin&&  <button onClick={affecter}>Affacter</button>}
        {isPartenaire&&  <button onClick={vender}>Confirmer la vente</button>}
      </div>
    </div>
  );
};
 
export default Popup;