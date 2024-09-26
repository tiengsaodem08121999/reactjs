import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id:1, name:"Quy", age:"25"},
            {id:2, name:"Minh", age:"27"},
            {id:3, name:"hihi", age:"Bat tu"},
        ]
    }

    render() {
        return (
            <div>
                <UserInfo data={this.state}></UserInfo>
                <br/>   
                <DisplayInfo listUsers={this.state.listUsers} ></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;