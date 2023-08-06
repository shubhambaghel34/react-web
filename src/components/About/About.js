import { Component } from "react";
import UserClass from "../user/UserClass";

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
      </div>
    );
  }
}
export default AboutUs;
