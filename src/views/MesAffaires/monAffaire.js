import React from "react";
import {useContext, useEffect, useState} from 'react'
import "./style.css";
import AffaireService from "../../services/affaireSevice";
function Popup(props) {
  const [fileInfo,setFileInfo] = useState([])
  const [file,setFile] = useState(null)

  useEffect(() => {
    console.log(props.affaire.id)
   AffaireService.getContratId(props.affaire.id).then((response) => {
        
          setFileInfo(AffaireService.getContrat(response))
           
        
        });
       
      },[fileInfo,setFileInfo,setFile])
     
  const ajouterContrat= (id,file)=>{
    if(file==null){
     
    }
    else{
    let formData = new FormData();
  formData.append("file", file)
  
     AffaireService.ajouterContrat(id,formData).then(()=>{
     
     }
   );
   setFile(null)
    }
    
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
        Apporteur : {props.affaire.apporteur}<br/>
        Agence : {props.affaire.partenaire ? props.affaire.partenaire.username: "Pas encore affécté"} <br/>
        Statut :{props.affaire.statut}<br/>
        Contrat : <a href={fileInfo.url}>{fileInfo.name}</a>
        <input
                        name="contrat"
                        onChange={ uploadJSONFiles}
                            type="file"
                            accept="application/pdf"
                           /> <br/> <button Onclick={ajouterContrat(props.affaire.id,file)}>Ajouter contrat</button>
      </div>
    </div>
  );
};
 
export default Popup;