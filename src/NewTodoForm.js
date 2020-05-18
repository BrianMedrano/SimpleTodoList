import React, { Component } from "react";
import "./NewToDoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Two way binding
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addNewItem(this.state.listItem);

    this.setState({
      listItem: "",
    });
  }

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label><br />
          <input
            type="text"
            id="task"
            name="listItem"
            onChange={this.handleChange}
            value={this.state.listItem}
            placeholder="Task"
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
