import { Component } from "react";
import HOCComponent from "./HOCComponent.js";
class CounterHOC extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateCount}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default HOCComponent(CounterHOC);
