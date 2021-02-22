import React from "react";
import axios from "axios";

export default class PersonUpdate extends React.Component {
  state = {
    id: 0,
    name: " ",
  };
  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault(); //prevent browser fro auto refresh

    const user = { id: this.state.id, name: this.state.name };
    //  const myUrl = "https://jsonplaceholder.typicode.com/users/";
    //const str = myUrl + user.id;
    // console.log(str);
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
        user,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Update Details</h1>
        <label>
          Person ID:
          <input type="number" name="id" onChange={this.handleChange} />
          <input type="text" name="name" onChange={this.handleChange1} />
        </label>
        <button type="submit"> Update User</button>
      </form>
    );
  }
}
