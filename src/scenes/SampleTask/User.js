import React, { Component } from 'react'

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
      <div>
        <h1>Publicaciones Inbianam Papu </h1>
        <br />
        {
          this.state.posts.map(item => {
            return <div key={item.person.id}>
              <h1>{item.person.name} </h1>
              <p>{item.person.state} </p>
            </div>
          })
        }
      </div>
    )
  }
}
