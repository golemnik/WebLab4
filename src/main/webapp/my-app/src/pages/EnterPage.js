import React from "react";
import ControlledInput from "../components/ControlledInput";
import ControlledButton from "../components/ControlledButton";

class EnterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility () {
        this.setState(state => ({
            visible: !state.visible
        }));
    }

    render() {
        if (this.state.visible) {
            return (
                <form>
                    <ControlledInput type='login'/> <br/>
                    <ControlledInput type='password'/> <br/>
                    <ControlledButton
                        type='submit'
                        buttonAction={this.handleVisibility}
                        buttonName={this.state.visible.toString()}
                    />
                </form>
            )
        }
        return (
            <div>
                <ControlledButton
                    buttonAction={this.handleVisibility}
                    buttonName={this.state.visible.toString()}
                />
            </div>
        )
    }
}

export default EnterPage