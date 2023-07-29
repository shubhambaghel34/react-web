import User from "../user/User";
import UserClass from "../user/UserClass";

const AboutUs=()=>{
    return(
        <div>
            <span>Hello from About us page</span>
            <User name="shubham" contact="11111" location="PUNE"/>
            <span>
            <UserClass name="shubhamB" contact="1111122" location="PUNE-PCMC"/>
        </span>
        </div>
    )
}
export default AboutUs;