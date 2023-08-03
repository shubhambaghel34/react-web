import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 0 };
    console.log(this.props.name + 'Constructor of child is called')
  }


componentDidMount(){
  console.log('Child didmount is called'+this.props.name);
}


  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    console.log('render of child is called',this.props.name)
    return (
      <div className="userclass-card">
        <h2>
          Name:{name}
          {this.count}
        </h2>
        <h3>Location:{location}</h3>
        <h4>Contact:{contact}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >Click</button>
        <p>{count}</p>
      </div>
    );
  }
}

export default UserClass;
