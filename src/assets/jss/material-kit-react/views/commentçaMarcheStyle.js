import { container } from "../../material-kit-react.js";
const commentStyle=(theme)=>({
container:{
    padding:"10px",
    margin:"30px 50px 0px 0px",
    background:"white",
    ...container,
    display:"block",
    textAlign:"center",
},
h1:{
    margin:"40px",
    color:"#0D1938",
    fontWeight:"600",
    [theme.breakpoints.down("xs")]: {
        fontSize:"35px",
         fontWeight:"calc(100% - 40)"
          
        }
},
grid:{
    color:"#0D1938",
    margin:"0px 0px 0px 0px",
    padding:"60px",
    textAlign:"left",
    border:"1px solid #ff2602",
    background:"#ffffff",
    
},
gridTitle:{
    color:"white",
    margin:"0px 0px 0px 0px",
    padding:"60px",
    textAlign:"left",
    
    background:"#FF6C1C",
    [theme.breakpoints.down("sm")]: {
        padding:"20px 5px"
          
        }
},
h2:{
    fontSize:"35px",
    fontWeight:"600",
    [theme.breakpoints.down("sm")]: {
        fontSize:"30px",
         fontWeight:"calc(100% - 40)"
          
        }
},
divs:{
    textAlign:"left",
    fontWeight:"300",
    fontSize:"20px",
    padding:"50px",
    [theme.breakpoints.down("sm")]: {
        padding:"20px 0px",
         
          
        }
    
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
})
export default commentStyle;