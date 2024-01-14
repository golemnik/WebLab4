import React from "react";
import "../css/main.css"

class Buttons extends React.Component {
    render() {
        return (
            <button type="button" onClick={this.props.act}> {this.props.bname} </button>
        )
    }
}

export default Buttons