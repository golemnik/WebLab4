import React from "react";
import PropTypes from "prop-types";
import "../css/main.css"

class ControlledButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            type: this.props.type,
            action: this.props.buttonAction,
            name: this.props.buttonName
        })
    }


    render() {
        return (
            <button type={this.state.type} onClick={this.state.action}> {this.state.name} </button>
        )
    }
}

ControlledButton.defaultProps = {
    buttonName: "click",
    type: "button"
};

ControlledButton.propTypes = {
    buttonAction: PropTypes.func,
    buttonName: PropTypes.string.isRequired
};

export default ControlledButton