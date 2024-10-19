import React from "react";

class AddUserInfor extends React.Component {
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
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
        });
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

export default AddUserInfor;