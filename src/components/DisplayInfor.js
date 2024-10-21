import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateless vs stateful

// class DisplayInfor extends React.Component {

//     render() {
//         const { listUsers } = this.props;
//         console.log("call me render");

//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id}
//                                     className={+user.age >= 18 ? 'red' : 'blue'} >
//                                     <div>My name {user.name}</div>
//                                     <div>My Age {user.age}</div>
//                                     <button onClick={() => this.props.handleDeletUser(user.id)}>Delete</button>
//                                     <hr></hr>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    return (
        <div className="display-infor-container">
            {true &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id}
                                className={+user.age >= 18 ? 'red' : 'blue'} >
                                <div>My name {user.name}</div>
                                <div>My Age {user.age}</div>
                                <button onClick={() => props.handleDeletUser(user.id)}>Delete</button>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfor;