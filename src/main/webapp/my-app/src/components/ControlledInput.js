import React from "react";
import "../css/main.css"

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label,
            type: this.props.type,
            input: '',
            action: this.props.action
        };
    }

    updateInput (event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        if (this.state.action != null) {
            return (
                <label>
                    {this.state.label}
                    <input
                        value={this.state.input}
                        type={this.state.type}
                        onChange={this.state.action}
                    />
                </label>
            )
        }
        return (
            <label>
                {this.state.label}
                <input
                    value={this.state.input}
                    type={this.state.type}
                    onChange={this.updateInput.bind(this)}
                />
            </label>
        )
    }
}

ControlledInput.defaultProps = {
    label: '',
    type: 'text'
}

export default ControlledInput