import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  getValueFromLocalStorage = () => {
    return localStorage.getItem(`count`);
  };

  onClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click Me</button>
        <br />
        <br />
        {this.state.count}
      </div>
    );
  }
}

export default Counter;
