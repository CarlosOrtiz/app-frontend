import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'antd';
const { TextArea } = Input;

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
        <Row style={{ padding: '8px 8px' }}>
          <Col span={5} order={1}>
            <Input
              type='text'
              name='title'
              placeholder='Write Task'
              onChange={this.onChange}
              value={this.state.title}
            />
            <br />
            <br />
            <TextArea
              rows={4}
              onChange={this.onChange}
              name='detail'
              placeholder='Write Detail Task'
              value={this.state.detail}
              showCount maxLength={200}
            />
            <br />
            <br />
            <Button onSubmit={this.onSubmit} type="primary">Save Task</Button>
          </Col>
        </Row>

      </form>
    )
  }
}