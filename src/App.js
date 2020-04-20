import React, { Component } from 'react';
import './App.css';
import tasks from '../src/sample/tasks.json'

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
      {this.state.tasks.map( e => <p key={e.id}>
        {e.id} - {e.title} - {e.detail} - {e.done}
      </p>
      )}
    </div>
  }
}

export default App;
