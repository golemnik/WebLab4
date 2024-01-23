import React from "react";
import ControlledInput from "./ControlledInput";
import DeleteDots from "../api/DeleteDots";


class DelDotForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault();
        DeleteDots();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <button type="submit" > Delete </button>
            </form>
        )
    }
}

export default DelDotForm