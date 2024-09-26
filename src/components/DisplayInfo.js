import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const { listUsers } = this.props;

        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}> 
                            <div>My name {user.name}</div>
                            <div>My Age {user.age}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo;