import React from "react";
import ControlledInput from "./ControlledInput";
import PushDot from "../api/PushDot";


class AddDotForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            r: 0
        };
    }

    uX (event) {
        this.setState({
            x: event.target.value,
            y: this.state.y,
            r: this.state.r
        })
    }
    uY (event) {
        this.setState({
            x: this.state.x,
            y: event.target.value,
            r: this.state.r
        })
    }
    uR (event) {
        this.setState({
            x: this.state.x,
            y: this.state.y,
            r: event.target.value
        })
    }

    checkHit() {
        return false;
    }

    handleSubmit(event) {
        event.preventDefault();
        PushDot({
            x: this.state.x,
            y: this.state.y,
            r: this.state.r,
            hit: this.checkHit()
        });
        this.setState({
            x: 0,
            y: 0,
            r: 0
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>X = <input onChange={this.uX.bind(this)} value={this.state.x}/> </label> <br/>
                <label>Y = <input onChange={this.uY.bind(this)} value={this.state.y}/> </label> <br/>
                <label>R = <input onChange={this.uR.bind(this)} value={this.state.r}/> </label> <br/>
                <button type="submit" > submit </button>
            </form>
        )
    }
}

export default AddDotForm