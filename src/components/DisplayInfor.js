import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log("call me constructor: 1");

        super(props);

        this.state = {
            isShow: true,
        };
    }

    componentDidMount() {
        console.log("call me component did mount: 2");
        setTimeout(() => { document.title = "QuylV" }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me update", this.props,  prevProps);
        if(this.props.listUsers !== prevProps.listUsers) {
            if(this.props.listUsers.length === 5) {
                alert(' You got 5 user !');
            }
        }

    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        const { listUsers } = this.props;
        console.log("call me render");


        return (
            <div className="display-infor-container">
                <div> <button onClick={() => { this.handleShowHide() }}> {this.state.isShow ? 'Hide' : 'show'} list user</button> </div>
                {this.state.isShow &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id}
                                    className={+user.age >= 18 ? 'red' : 'blue'} >
                                    <div>My name {user.name}</div>
                                    <div>My Age {user.age}</div>
                                    <button onClick={() => this.props.handleDeletUser(user.id)}>Delete</button>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;