import { defaultFont } from "../../../jss/material-kit-react.js";

import tooltip from "../../../jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
  full:{
    display: "block",
    
    display:"block",
    justifyContent:"center",
  },
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
   
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  list1: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
   
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  
  listItem: {
    float: "left",
    color: "#00A8E8",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "20px 0px 0px 0px",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  espaceP: {
    color: "#ff2602",
    position: "relative",
    padding: "10px",
    fontWeight: "500",
    borderRadius:"30px",
    fontSize: "16px",
    background: "rgb(255, 255, 255)",
   
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px 0px 0px 40px",
    display: "inline-flex",
    border: "1px solid #ff2602",
    "&:hover,&:focus": {
      color: "#ffffff",
      background:"#ff2602",
      
      border: "1px solid #ffffff",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  headerButtonLogout:{
    color: "#ff2602",
    position: "relative",
    padding: "10px",
    fontWeight: "500",
    borderRadius:"30px",
    fontSize: "16px",
    background: "rgb(255, 255, 255)",
   
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px 0px 0px 40px",
    display: "inline-flex",
    border: "1px solid #ff2602",
    "&:hover,&:focus": {
      color: "#ffffff",
      background:"#ff2602",
      
      border: "1px solid #ffffff",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  
  },
  headerButton:{
   
      color: "#000000",
      position: "relative",
      padding: "10px",
      fontWeight: "500",
      borderRadius:"30px",
      fontSize: "16px",
      background: "rgb(255, 255, 255)",
     
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px 0px 0px 40px",
      display: "inline-flex",
      border: "1px solid #000000",
      "&:hover,&:focus": {
        color: "#ffffff",
        
        border: "1px solid #ffffff",
        background:"#000000",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
  
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
      },
    
  },
  espaceA: {
    color: "#000000",
    position: "relative",
    padding: "10px",
    fontWeight: "500",
    borderRadius:"30px",
    fontSize: "16px",
    background: "rgb(255, 255, 255)",
   
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px 0px 0px 230px",
    display: "inline-flex",
    border: "1px solid #000000",
    "&:hover,&:focus": {
      color: "#ffffff",
      
      border: "1px solid #ffffff",
      background:"#000000",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",

      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  a:{
    color:"#000000",
    margin:"70px 20px",
    fontSize: "16px",
    fontWeight:"400",
    "&:hover,&:focus": {
      color:"#ff2602"
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
});

export default headerLinksStyle;
