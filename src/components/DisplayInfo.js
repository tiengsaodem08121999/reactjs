import React from "react";

class DisplayInfo extends React.Component {
    render() {

        return (
            <div>
                <div>My name {this.props.name}</div>
                <div>My Age {this.props.age}</div>
            </div>
        )
    }
}

export default DisplayInfo;