import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "QuyLV",
        address: "HCM",
        age: 25
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        })
    }

    handleonSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }
    
    render() {
        return (
            <div>
                My name is {this.state.name} I'm  {this.state.age}
                <form onSubmit={(event) => this.handleonSubmit(event)}>
                    <label>You'r name:</label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    <label>You'r Age:</label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;