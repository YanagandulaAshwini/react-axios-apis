import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ persons: res.data });
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>
            {person.id},{person.name}
          </li>
        ))}
      </ul>
    );
  }
}
