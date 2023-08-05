import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    //console.log(this.props.name + "Constructor of child is called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shubhambaghel34");
    const jsonData = await data.json();
    console.log("usersjson", jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {
    console.log("componentdidupdte called ");
  }

  render() {
    const { name, location, blog, avatar_url } = this.state.userInfo;
    //const { count } = this.state;
    // console.log("render of child is called", this.props.name);
    return (
      <div className="userclass-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Blog:{blog}</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
