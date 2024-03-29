import { transform } from "typescript";
import { container } from "../../material-kit-react.js";


const componentsStyle =(theme) =>( {
  container:{
      container,
      [theme.breakpoints.down("xs")]: {
     
        
      }
     
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    color:"Black",
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline",
    position: "relative",
  },
  subtitle: {
    color:"#0D1938",
    fontSize: "35px",
    fontWeight:"700",
    maxWidth: "650px",
    [theme.breakpoints.down("xs")]: {
     
      fontSize:"calc(25px)",
      fontWeight:"calc(100% - 60)",
      
    }
    
  },
  h1:{
    color:"#ff2602",
    
    margin:"40px",
    fontWeight:"600",
    [theme.breakpoints.down("xs")]: {
        fontSize:"35px",
        margin:"40px 0px",
         fontWeight:"calc(100% - 40)"
          
        }
  },
  contents:{
  margin:"100px 0px",
  display:"flex",
  textAlign:"center",
  justifyContent:"space-around"
  
},


full:{
  padding:"0px",
  width:"100%",
  

},
  section: {
    
    background:"#ffffff",
    padding: "50px 0px 50px 0px",
    textAlign: "center",
    
 
  },
  Iconsdone:{
    transform: "scale(2)",
    color:"#009fff",
    marginRight:"10px",
  },
  inputIconsColor: {
    marginBottom:"50px",
    margin:"30px",
    transform: "scale(2.8)",
    color:"#363636",
  },
  a:{
    color:"#000000",
    position:"relative",
    margin:"30px 20px 0px 0px",
    fontWeight:"400",
    "&:hover,&:focus": {
      color:"#ff2602"
    }
  },
  grid:{
    color:"#0D1938",
   
    fontSize:"22px",
    padding:"50px 10px",
    display:"block",
    margin:"5px 5px 0px 0px",
    width:"auto",
    textAlign: "center",
    borderRadius:"10px",
  
    
    background:"#ffffff",
    width:"auto"
  },
  span:{
    fontSize:"25px",
    color:"#009fff"
  },
  button:{
    boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    color:"white",
    border:"1px solid #ffffff",
    fontWeight:"450",
    borderRadius:'40px',
    margin:"30px 30px 0px 0px",
    
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
  
  subtitle1: {
    color:"#009fff",
    fontSize: "30px",
    fontWeight:"700",
    maxWidth: "650px",
    [theme.breakpoints.down("xs")]: {
     
      fontSize:"calc(25px)",
      fontWeight:"calc(100% - 60)",
      
    }
    
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
});

export default componentsStyle;
