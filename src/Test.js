import React from 'react';

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

//container component
// class Test extends Component {
//     render() {
//         //console.log(this.props);
//         const{ names } = this.props;
//         const namesList = names.map(name => {
//             if(name.id === 1) {
//                 return (
//                     <div className="namesListt" key={name.id}>
//                     <div>Name: { name.name }</div>
//                     <div>Name: { name.name1 }</div>
//                     </div>
//                 )
//             } else {
//                 return null;
//             }
//         })
//         return (
//             <div className="test">
//                 { namesList }
//             </div>
//         )
//     }
// }

//UI COMPONENT
const Test = ({todos, deleteTodo}) => {
    const todosList = todos.map(todo => {
        return (
            <div className="todosListt" key={todo.id}>
                <div> { todo.work }</div>
                <button onClick={() => {deleteTodo(todo.id)}}>Delete Todo</button>
            </div>
        )
        })
    return (
        <div className="test">
            { todosList }
        </div>
    )
}


export default Test;