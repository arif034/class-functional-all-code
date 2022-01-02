import { Component } from "react";
import { get } from "./UniqueId.js";
class ListRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        value: ""
      }
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.item.value} />
      </div>
    );
  }
}
export default ListRendering;
