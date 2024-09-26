import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

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
                <UserInfo data={this.state}></UserInfo>
                <br/>   
                <DisplayInfo name="QuyLV"  age="25" ></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;