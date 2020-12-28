import React, { Component } from 'react'
import { Card, Col, Row, Rate, Modal, Tag, Space, Spin } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
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
      <div className="site-card-wrapper" style={{ textAlign: 'center' }}>
        <h1>Nuestros Usuarios</h1>
        <Row gutter={16} style={{ marginLeft: '100px' }} >
          {
            this.state.posts.map(item => {
              fullName = `${item.person.name} ${item.person.lastname}`;
              phone = `Núm Cel: ${item.person.phone}`
              return <Col key={item.person.id} span={8} style={{ textAlign: 'center', paddingBottom: '10px' }} >
                <Card
                  hoverable
                  style={{ width: 240 }}
                  bordered={false}
                  onClick={info}
                  cover={<img alt="example" src={item.person.photo} />} >
                  <Meta title={fullName.toUpperCase()} description={phone} />
                  <Rate allowHalf defaultValue={2.5} />
                  <Tag color="magenta">Backend</Tag>
                  <Tag color="blue">Frontend</Tag>
                  <Tag icon={<LinkedinOutlined />} color="#55acee">
                    LinkedIn
                  </Tag>
                  <Tag icon={<GithubOutlined />} color="default">
                    Github
                  </Tag>
                </Card>
              </Col>
            })
          }
        </Row>
      </div>
    )
  }
}

