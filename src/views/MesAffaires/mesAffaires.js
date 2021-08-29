import React, {useContext, useEffect, useState} from 'react'
import AuthService from "../../services/authService";
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import ReceiptIcon from '@material-ui/icons/Receipt';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import Footer from "../../components/Footer/Footer.js";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Paper from '@material-ui/core/Paper';
import Loading from "../loading/Loading.js";
import MenuItem from '@material-ui/core/MenuItem';
import MonAffaire from "./monAffaire";
import AffaireService from "../../services/affaireSevice";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from "../../components/CustomButtons/Button.js";
import {Link} from 'react-router-dom'
import affaireSevice from '../../services/affaireSevice';
const useStyles = makeStyles((theme)=>({
    container:{
      padding:"25px",
        margin:"25px 0px",
        textAlign:"center"
       
    },
    table: {
      margin:"25px",
      boxShadow:"10px 5px 5px gris",
      minWidth: 700,
      maxWidth:1300
    },
    h4:{
      fontWeight:"400",
      color:"#ff2602",
        fontSize:"25px",
        [theme.breakpoints.down("xs")]: {
     
          fontSize:"calc(20px)",
         fontWeight:"360"
          
        }
    },

  }));

function OrderHistory() {
    const classes = useStyles();
    const [statut,setStatut]=useState("Vendu");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [affaires,setAffaires] = useState([])
    const [affaire,setAffaire] = useState(null)
    const isAdmin = AuthService.isAdmin()
    const isApporteur = AuthService.isApporteur()
    const isPartenaire = AuthService.isPartenaire()
    const user = localStorage.getItem('user')
    const [fileInfo,setFileInfo] = useState([])
   
    
    const close=() =>{setAffaire(null)}
    
   

    useEffect(() => {
        if(user){
            const getHistory = () =>{
                if(isApporteur){
                   AffaireService.mesAffaireAppo().then(
                    response => {
                        setIsLoading(false)
                        setAffaires(response.data)
                       })
                   
                }
                else if(isPartenaire){
                    AffaireService.mesAffairePart().then(
                        response => {
                          setIsLoading(false)
                            setAffaires(response.data)
                           })
                }
                else if(isAdmin){
                    AffaireService.allAffaires().then(
                        response => {
                          setIsLoading(false)
                            setAffaires(response.data)
                           })
                }
            }
            getHistory()
            
        }
    },[user,affaires,setAffaires])
    
    const handleChange = (event) => {
      setStatut(event.target.value);
    };
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
        <div style={{ background:"white"}}>
        
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
      <h4 className={classes.h4}> {affaires.length==0 ? "Vous n'avez aucun affaire ": "Le nombre total des affaires  : " }{affaires.length}</h4>
        <Select name="statut"  value={statut}  style={{width:"80%",margin:"20px"}}
                  onChange={handleChange}>

                  <MenuItem value="En vente"> Affaires afféctés</MenuItem>
                  
                  {!isPartenaire&&<MenuItem value="Contrat signé">Contrat signé</MenuItem>}
                  {!isPartenaire&&<MenuItem value="En attente de traitement"> Affaires non encors traités</MenuItem>}
                  <MenuItem value="Vendu">Affaires vendus</MenuItem>
       
                     </Select>
        <TableContainer component={Paper} >
        {affaires.length==0&&isLoading?<Loading/>
             : 
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>DATE</TableCell>
                <TableCell align="right">TYPE DU BIEN</TableCell>
                <TableCell align="right">PROPRIETAIRE</TableCell>
                <TableCell align="right">APPORTEUR</TableCell>
                <TableCell align="right">AGENCE</TableCell>
                <TableCell align="right">STATUT</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
           {  
          affaires.map(row => {
              
          
              if(row.statut==statut){
                return(
            <TableRow key={row.NomPrenom}>
              <TableCell component="th" scope="row">
                {row.creationDate}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.nomPrenom}</TableCell>
              <TableCell align="right">{row.apporteur.email}</TableCell>
              <TableCell align="right">{row.partenaire ?row.partenaire.email:"Pas encors affécté"}</TableCell>
             
              <TableCell align="right">{row.statut}</TableCell>
              
              
             <TableCell align="right">
             <IconButton style={{color:"#ff2a02"}}   onClick={()=>setAffaire(row)} component="span">
             <ReceiptIcon/>
        </IconButton>
              
               </TableCell> 
             
              
              </TableRow>
                )
              }
          })
}
        </TableBody>
        
          </Table>
}
        </TableContainer>
        {affaire && <MonAffaire affaire={affaire} popup={close}/>}
        </div>
        
        {!affaire && <Footer />}
        </div>
      );
    
}

export default OrderHistory;