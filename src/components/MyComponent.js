import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "QuyLV",
        address: "HCM",
        age: 25
    };
    handleClick = (event) => {
        console.log("my name: ", this.state.name);

        this.setState({
            name: "Le Van Quy",
            age: Math.floor((Math.random() * 100) + 1),
        })
    }

    handleOnMoveOver(event) {
        // console.log(event);

    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleonSubmit = (event) => {
        event.preventDefault();
        alert('me');
    }

    render() {
        return (
            <div>
                My name is {this.state.name} I'm  {this.state.age}
                <form onSubmit={(event) => this.handleonSubmit(event)}> 
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;