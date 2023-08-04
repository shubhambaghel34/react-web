import {Component} from "react";
import User from "../user/User";
import UserClass from "../user/UserClass";


class AboutUs extends Component{
 constructor(props){
    super(props);
    
 }
    
 componentDidMount(){
    
  }
  
    render(){
       
        return(
                 <div className="about-us">
                    <span>Hello from About us page</span>
                  
                    <span>
                   
                    <UserClass name="Elon Musk" contact="1221122" location="DXB"/>
                </span>
                </div>
                
        )
    }
}





// const AboutUs=()=>{
//     return(
//         <div className="about-us">
//             <span>Hello from About us page</span>
//             {/* <User name="shubham" contact="11111" location="PUNE"/> */}
//             <span>
//             <UserClass name="shubhamB" contact="1111122" location="PUNE-PCMC"/>
//         </span>
//         </div>
//     )
// }
export default AboutUs;