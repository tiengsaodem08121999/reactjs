import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {
    state = {
        isShow: true,
    }
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        const { listUsers } = this.props;

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