import { Component } from "react";

class Child extends Component {
  render() {
    return (
      <button onClick={this.props.updateCount}>
        Count : {this.props.count}
      </button>
    );
  }
}

export default Child;
