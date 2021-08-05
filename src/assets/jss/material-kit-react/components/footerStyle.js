import { container, primaryColor } from "../../../jss/material-kit-react.js";

const footerStyle = {
  block: {
    color: "white",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "20px",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    "&:hover":{
      color:"#ff2602"
    }
  },
  left: {
    float: "left!important",
    display: "flex",
    justifyContent:"center",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important",
    lineHeight: "30px",
    fontSize: "30px",
    borderRadius: "3px",
    fontWeight:"800",
    color:"white",
        textTransform: "none",
    padding: "8px 16px",
    letterSpacing: "unset",
    
 
  },
  footer: {
    padding: "5px 0",
    textAlign: "center",
    display: "flex",

    background:"#000000",
    zIndex: "2",
    position: "relative",
  },
  a: {
    color: "white",
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
};
export default footerStyle;