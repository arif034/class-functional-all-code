import { Component } from "react";
import { Link } from "react-router-dom";
class ReactRouter extends Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
        <Link to="/contacts">Contacts</Link>
        <br />
        <br />
      </div>
    );
  }
}

export default ReactRouter;
