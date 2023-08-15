import { Component } from "react";
import UserClass from "../user/UserClass";
import UserContext from "../../utils/UserContext/UserContext";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about-us">
        <span>Hello from About us page</span>
        <span>
          <UserClass name="Elon Musk" contact="1221122" location="DXB" />
        </span>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
export default AboutUs;
