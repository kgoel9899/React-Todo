import React, { Component } from 'react';
import Test from './Test';
import Add from './Add';

//passing multiple objects to the test.js file
class App extends Component {
  state = {
    names: [
      {name:"A", name1: "B", id: 1},
      {name:"C", name1: "D", id: 2},
      {name:"D", name1: "E", id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <div>Hello</div>
        <div>Welcome</div>
        <Test names={this.state.names}/>
        <Add />
      </div>
    )
  }
}

export default App;
