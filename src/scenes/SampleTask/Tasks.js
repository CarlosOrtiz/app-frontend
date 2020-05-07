import React, { Component } from 'react';
import Task from './Task.js';
import PropsTypes from 'prop-types';

class Tasks extends Component {
  render() {
    return this.props.tasks.map(task =>
      <Task
        task={task}
        key={task.id}
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
      />);
  }
}

Task.propsTypes = {
  task: PropsTypes.array.isRequired
}

export default Tasks;