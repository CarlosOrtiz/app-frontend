import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './scenes/SampleTask/Tasks';
import TaskForm from './scenes/SampleTask/TaskForm'
import User from './scenes/SampleTask/User'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasks
    }
  }

  addTaks = (title, detail) => {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      detail: detail
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks })

  }
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(item => {
      if (item.id === id)
        item.done = !item.done
      return item;
    });
    this.setState({ tasks: newTasks });
  }

  render() {
    return <div>
      <Router>
        <Link to="/" style={{ padding: '15px' }}>Home</Link>
        <Link to="/users">Users</Link>
        <br />
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
          </div>
        }}>
        </Route>
        <Route path="/users" component={User} />
      </Router>
    </div>
  }
}

export default App;
