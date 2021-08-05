import { container } from "../../material-kit-react.js";
const commentStyle={
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
},
h2:{
    fontSize:"40px",
    fontWeight:"700",
},
divs:{
    textAlign:"left",
    fontWeight:"200",
    fontSize:"23px",
    padding:"60px",
    
},

button:{
    boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    color:"white",
    border:"1px solid #ffffff",
    fontWeight:"500",
    borderRadius:'40px',
    margin:"50px 50px 50px 0px",
    fontSize:"20px",
    background:"#ff2602",
    "&:hover":{
      background:"white",
      border: "1px solid #ff2602",
      color:"#ff2602"
    }
  },
}
export default commentStyle;