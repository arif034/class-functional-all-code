import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  updateCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <Child
          count={this.state.count}
          updateCount={() => this.updateCount()}
        />
      </div>
    );
  }
}

export default Parent;
