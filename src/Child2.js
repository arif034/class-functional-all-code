import { Component } from "react";
class Child2 extends Component {
  render() {
    const name = this.props.name;
    return (
      <button onClick={() => this.props.changeHandler(name)}>{name}</button>
    );
  }
}
export default Child2;
