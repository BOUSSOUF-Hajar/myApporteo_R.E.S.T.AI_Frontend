import { rgbToHex } from "@material-ui/core";
import { container } from "../../../jss/material-kit-react.js";
import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont,
} from "../../../jss/material-kit-react";
const signupPageStyle =(theme) =>({
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    
    paddingTop: "10vh",
    color: "#FFFFFF",
    paddingBottom: "100px",
  },
  message:{
    color:"blue",
    fontSize:"15px",
    padding:"10px",

  },
  messageSucc:{
    color:"red",
    fontSize:"15px",
    padding:"10px",

  },
  input:{
    padding:"10px",
    margin:"20px 0px",
    border:"none",
    fontSize:"15px",
  borderBottom:"1px solid #888",
  width:"90%",
  "&:focus":{
    
      borderBottom: "2px solid #ff2602"
      
  }
  },
  h5:{
    color:"#009fff",
    fontWeight:"460",
    fontSize:"20px",
    "&:focus":{
      color:"#009fff",
      
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:"15px",
      
      fontWeight:"calc(100% - 60)",
      
    }
  },
  h3:{
    color:"#000000",
    fontWeight:"500",
    fontSize:"30px",
    [theme.breakpoints.down("xs")]: {
      fontSize:"24px",
      
      fontWeight:"calc(100% - 60)",
      
    }
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    
    padding: "15px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    display:"flex",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  TextField: {
    
  },
  button:{
    boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    color:"white",
    border:"1px solid #ffffff",
    fontWeight:"450",
    borderRadius:'40px',
    margin:"10px 30px 0px 0px",
    
    padding:"10px 10px",
    background:"#ff2602",
    "&:hover,&:focus":{
      background:"white",
      border: "1px solid #ff2602",
      color:"#ff2602",
      
    },
    [theme.breakpoints.down("xs")]: {
     
      fontSize:"calc(100% - 3px)",
     
      margin:"5px 20px 0px 0px",
      
    }
  },
  buttonInsc:{
    boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    color:"#ff2602",
    border:"1px solid #ff2602",
    fontWeight:"450",
    borderRadius:'40px',
    margin:"10px 30px 0px 0px",
    
    background:"white",
    padding:"10px 10px",
    "&:hover,&:focus":{
      background:"#ff2602",
      border: "1px solid #ff2602",
      color:"white"
    },
    [theme.breakpoints.down("xs")]: {
     
      fontSize:"calc(100% - 3px)",
     
      margin:"5px 20px 0px 0px",
      
    }
  },
});

export default signupPageStyle;
