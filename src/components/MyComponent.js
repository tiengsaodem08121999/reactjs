import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfo from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Quy", age: "16" },
            { id: 2, name: "Minh", age: "27" },
            { id: 3, name: "hihi", age: "50" },
        ]
    }

    handleAddNewUser = (userOject) => {
        this.setState({
            listUsers: [userOject, ...this.state.listUsers],
        });
    }

    handleDeletUser = (userId) => {
        let listUserClone = this.state.listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUserClone,
        })
    }

    render() {

        const text = true;
        return (
            <>
                {text}
                <div className="a">
                    <AddUserInfor data={this.state}
                        handleAddNewUser={this.handleAddNewUser}
                    >
                    </AddUserInfor>
                    <br />
                    <DisplayInfo listUsers={this.state.listUsers}
                                handleDeletUser={this.handleDeletUser}
                    >
                    </DisplayInfo>
                </div>
                <div className="b"></div>
            </>
        );
    }
}

export default MyComponent;