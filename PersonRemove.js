import React from "react";
import axios from "axios";

export default class PersonRemove extends React.Component {
  state = {
    id: 0,
  };
  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault(); //prevent browser from auto refresh

    const user = { id: this.state.id };
    const myUrl = "https://jsonplaceholder.typicode.com/users/";
    const str = myUrl + user.id;
    console.log(str);
    axios.delete(str).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person ID:
          <input type="number" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit"> Delete User</button>
      </form>
    );
  }
}
