import React, { Component } from 'react';

// class Test extends Component {
//     render() {
//         console.log(this.props);
//         //name and name1 same variables (must) as that of this.props
//         const { name, name1 } = this.props; 
//         return (
//             <div className="test">
//                 <div>Name: { name }</div>
//                 <div>Name: { name1 }</div>
//             </div>
//         )
//     }
// }

class Test extends Component {
    render() {
        //console.log(this.props);
        const{ names } = this.props;
        const namesList = names.map(name => {
            if(name.id === 1) {
                return (
                    <div className="namesListt" key={name.id}>
                    <div>Name: { name.name }</div>
                    <div>Name: { name.name1 }</div>
                    </div>
                )
            } else {
                return null;
            }
        })
        return (
            <div className="test">
                { namesList }
            </div>
        )
    }
}

//UI COMPONENT
// const Test = ({names}) => {
//     const namesList = names.map(name => {
//         return (
//             <div className="namesListt" key={name.id}>
//                 <div>Name: { name.name }</div>
//                 <div>Name: { name.name1 }</div>
//             </div>
//         )
//         })
//     return (
//         <div className="test">
//             { namesList }
//         </div>
//     )
// }


export default Test;