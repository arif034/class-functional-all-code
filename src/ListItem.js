import { Component, Fragment } from "react";
class ListItem extends Component {
  render() {
    return (
      <Fragment>
        <li>{this.props.item}</li>
      </Fragment>
    );
  }
}
export default ListItem;
