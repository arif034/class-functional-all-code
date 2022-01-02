import { Component } from "react";
import ListItem from "./ListItem.js";
class ListRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: ""
    };
  }

  handleChange = (event) => {
    this.setState(() => {
      return { item: event.target.value };
    });
  };

  handleSubmit = () => {
    this.setState(() => {
      return { items: [...this.state.items, this.state.item] };
    });
  };

  render() {
    const list = this.state.items.map((item) => <ListItem item={item} />);
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <br />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
        <br />
        <br />
        <ul>{list}</ul>
      </div>
    );
  }
}
export default ListRendering;
