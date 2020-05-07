import React, { Component } from 'react';
import PropsTypes from 'prop-types';
class Task extends Component {

  styleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'gray' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none'
    }
  }

  render() {
    const { task } = this.props;
    return <p style={this.styleCompleted()}>
      {task.id} -
      {task.title} -
      {task.detail} -
      {task.done}
      <input type="checkbox" onChangeCapture={this.props.checkDone.bind(this, task.id)} />
      <button style={btbDelete} onClick={this.props.deleteTask.bind(this, task.id)} >X</button>
    </p>
  }
}

Task.propsTypes = {
  task: PropsTypes.object.isRequired
}

const btbDelete = {
  fontSize: '19',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default Task;