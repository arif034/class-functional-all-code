import { Component } from "react";

class UniqueId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  get = () => {
    this.setState((prevState) => {
      return {
        id: prevState.id + 1
      };
    });
    return this.state.id;
  };
}

export default UniqueId;
