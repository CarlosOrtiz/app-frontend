import React, { Component } from 'react'
import { Card, Col, Row, Rate, Modal, Space, Spin } from 'antd';
const { Meta } = Card;
let fullName = '';
let phone = '';

async function info() {
  Modal.info({
    title: 'INFORMACIÓN DE LA PERSONA',
    content: (
      <div style={{ textAlign: 'center' }}>
        <p style={{ textAlign: 'left' }}>some messages...some messages...</p>
        <p style={{ textAlign: 'left' }}>some messages...some messages...</p>
        <Space size="middle" style={{ textAlign: 'center' }} >
          <Spin size="large" />
        </Space>
      </div>
    ),
    onOk() { },
  });
}
export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const res = await fetch('https://inbianam.herokuapp.com/user/get-all')
    const data = await res.json();
    this.setState({ posts: data })
  }


  render() {
    return (
      <div align="center">
        <h1><b>Nuestros Usuarios</b></h1>
        <div className="Container">
          {
            this.state.posts.map(item => {
              fullName = `${item.person.name} ${item.person.lastname}`;
              phone = `Núm Cel: ${item.person.phone}`
              return <Col key={item.person.id} span={8} className="Element" order={item.person.id}  >
                <Card
                  hoverable
                  style={{ width: 150 }}
                  onClick={info}
                  cover={<img alt="example" src={item.person.photo} />} >
                  <Meta title={fullName.toUpperCase()} description={phone} />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
            })
          }
        </div>
      </div>
    )
  }
}

