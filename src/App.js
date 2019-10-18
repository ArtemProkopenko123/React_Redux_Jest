import React, { Component } from 'react';
import Home from './components/home';
import './App.css';

import { MyContext } from '.';


export default class App extends Component {

  state = {
    tasks: [
      {
        id: 15713863336,
        TaskText: 'Foure',
        Quantity: '4',
        dataStore: 'context'
      },
      {
        id: 15713863337,
        TaskText: 'Five',
        quantity: '5',
        dataStore: 'context'
      },
      {
        id: 15713863338,
        TaskText: 'Six',
        Quantity: '6',
        dataStore: 'context'
      }
    ]
  }

  contextAddTask = (task) => {
    const tasks = this.state.tasks;
    tasks.unshift(task)
    this.setState({
      tasks
    });
  }
  contextRemoveItem = (id) => {
    const newState = this.state.tasks.filter((task) => task.id !== id)
    this.setState({
      tasks: newState
    });
  }

  render() {
    return (
      <div className="App">
        <MyContext.Provider
          value={{
            tasks: this.state.tasks,
            contextAddTask: this.contextAddTask,
            contextRemoveItem: this.contextRemoveItem
          }}>
          <Home />
        </MyContext.Provider>
      </div>);
  }
}
