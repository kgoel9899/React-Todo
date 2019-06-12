// import React, { Component } from 'react'

// class Add extends Component {
//     state = {
//         name: null,
//         name1: null
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         });
//     };
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//     };
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="name">Name</label>
//                     <input type="text" id="name" onChange={this.handleChange}/>
//                     <label htmlFor="name1">Name1</label>
//                     <input type="text" id="name1" onChange={this.handleChange}/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Add;

import React, { Component } from 'react'

class Add extends Component {
  state = {
    name: null,
    name1: null
  }
  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="nam1e">Name1:</label>
          <input type="text" id="name1" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Add
