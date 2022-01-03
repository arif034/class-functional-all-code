import { Component } from "react";

function HOCComponent(OldComponent) {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    counter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OldComponent count={this.state.count} updateCount={this.counter} />
      );
    }
  }
  return NewComponent;
}

export default HOCComponent;
