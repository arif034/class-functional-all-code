import { Component } from "react";
import Child2 from "./Child2.js";
class Parent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arif"
    };
  }

  changeHandler = (value) => {
    if (value === "Arif")
      this.setState(() => {
        return { name: "Guest" };
      });
    else
      this.setState(() => {
        return { name: "Arif" };
      });
  };

  render() {
    return (
      <div>
        <Child2 name={this.state.name} changeHandler={this.changeHandler} />
      </div>
    );
  }
}
export default Parent2;
