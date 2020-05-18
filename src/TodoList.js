import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    //Todo list items will be stored in this array
    this.state = {
      list: [],
    };

    this.addNewItem = this.addNewItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.editExistingItem = this.editExistingItem.bind(this);
  }

  addNewItem(newItem) {
    const listObject = { itemText: newItem, id: uuid() };
    this.setState({
      list: [...this.state.list, listObject],
    });
  }

  //Remove item from the to do list
  handleRemoveItem(itemId) {
    this.setState({
      list: this.state.list.filter((item) => item.id !== itemId),
    });
  }

  //Edit task item. Use ID to edit the correct task
  editExistingItem(id, updatedTask) {
    const updatedTodos = this.state.list.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, itemText: updatedTask };
      }
      return todoItem;
    });

    this.setState({
      list: updatedTodos,
    });
  }

  render() {
    const listOfItems = this.state.list.map((item) => {
      return (
        <Todo
          task={item.itemText}
          key={item.id}
          id={item.id}
          deleteItem={this.handleRemoveItem}
          handleEdit={this.editExistingItem}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>
          To do list <span>A simple React to do list</span>
        </h1>
        <ul>{listOfItems}</ul>

        <NewTodoForm addNewItem={this.addNewItem} />
      </div>
    );
  }
}

export default TodoList;
