import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCrossedOut: false,
      isEditing: false,
      task: this.props.task,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Cross out when clicked
  handleClick() {
    this.setState((prevState) => ({
      isCrossedOut: !prevState.isCrossedOut,
    }));
  }

  //Call parent setState function using this function. Pass unique ID to identify which task to delete
  handleDelete() {
    this.props.deleteItem(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  //Edit the task item and pass it back to parent to save
  handleEdit(evt) {
    evt.preventDefault();
    this.props.handleEdit(this.props.id, this.state.task);
    this.toggleForm();
  }

  //Two way binding for task
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleEdit} className="Todo-edit-form">
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            onClick={this.handleClick}
            className={
              this.state.isCrossedOut ? "Todo-task crossedOut" : "Todo-task"
            }
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return (
      <div className="Todo">
        {result}

        <div className="Todo-buttons">
          <button onClick={this.toggleForm}>
            <i class="fas fa-pen"></i>
          </button>
          <button onClick={this.handleDelete}>
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
