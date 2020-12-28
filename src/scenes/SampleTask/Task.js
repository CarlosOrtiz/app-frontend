import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Button, Checkbox, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
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
    return <div style={this.styleCompleted()}>
      <Row style={{ padding: '8px 8px' }}>
        <Col span={5} order={1}>
          <div >
            {task.id} -
            {task.title} -
            {task.detail} -
            {task.done}
          </div>
        </Col>
        <Col style={{ padding: '0px 19px' }} span={1} order={2}>
          <div >
            <Checkbox onChange={this.props.checkDone.bind(this, task.id)} ></Checkbox>
          </div>
        </Col>
        <Col span={6} order={3}>
          <div className="icons-list">
            <Button type="primary" danger shape="circle" icon={<DeleteOutlined spin />} value="small" onClick={this.props.deleteTask.bind(this, task.id)}></Button>
          </div>
        </Col>
      </Row>
    </div>
  }
}

Task.propsTypes = {
  task: PropsTypes.object.isRequired
}

const btbDelete = {
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer'
}

export default Task;