import React, { Component } from 'react';

export default class TaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      detail: ''
    }
  }

  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.detail)
    e.preventDefault();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Write Task'
          onChange={this.onChange}
          value={this.state.title} />
        <br />
        <br />
        <textarea
          name='detail'
          placeholder='Write Detail Task'
          onChange={this.onChange}
          value={this.state.detail} >
        </textarea>
        <br />
        <br />
        <button onSubmit={this.onSubmit}>
          Save Task
        </button>
      </form>
    )
  }
}