import React from 'react';
import './App.css';

/* function Mycompoment(props) {
  return (
    <div id="hello">
      <h4>{props.subtitle}</h4>
      {props.text}
    </div>
  );
} */

class Mycompoment extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show)
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.subtitle}
          <button onClick={this.toggleShow}> Toggle show </button>
        </div>
      )
    else
      return (
        <div>
          <br /><b>Nothing Compoment </b>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
  }
}
// const App = () => <div>This us my compoment: <Mycompoment /> </div>  //funcion flecha

function App() {
  return (
    <div className="App">
      This Is My Compoment:
      <Mycompoment text='Hello' subtitle='Test 1' />
      <Mycompoment text='Word' subtitle='Test 1' />
      <Mycompoment text='z' subtitle='Test 1' error='error' />
    </div>
  );
}

export default App;
