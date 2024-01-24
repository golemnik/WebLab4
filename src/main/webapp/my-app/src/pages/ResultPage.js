import React from "react";
import ResultTable from "../components/ResultTable"
import DotForm from "../components/DotForm"
import ControlledGraph from "../components/drawing/ControlledGraph";
import pullDot from "../api/PullDot";
import funcs from "../components/drawing/Draw";

class ResultPage extends React.Component {
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
        if(this.state.visible) {
            return (
                <div>
                    <DotForm/>
                    <ControlledGraph/>
                    <ResultTable/>
                </div>
            )
        }
        return (<div/>)
    }
}

export default ResultPage