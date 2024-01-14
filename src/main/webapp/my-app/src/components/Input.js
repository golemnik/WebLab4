import React from "react";
import "../css/main.css"

class TextInput extends React.Component {
    render() {
        return (
            <input value={this.props.value} type="text" onChange={(event) => {this.props.act(event)}}/>
        )
    }
}

export default TextInput